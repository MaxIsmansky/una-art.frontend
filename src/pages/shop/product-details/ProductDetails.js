import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './ProductDetails.module.css';

const ProductDetails = () => {
    const { category, productId } = useParams();
    const [product, setProduct] = useState(null);
    const [currentImage, setCurrentImage] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const placeholderImage = 'https://via.placeholder.com/1000x700?text=No+Image';

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(
                    `${process.env.REACT_APP_BACKEND_URL}/api/v1/shop/${category}/${productId}`
                );
                if (!response.ok) {
                    throw new Error('Failed to fetch product data');
                }
                const data = await response.json();
                setProduct({
                    name: data.productName,
                    year: data.creationYear,
                    size: data.size,
                    description: data.description,
                    price: `${data.price} ${data.currency}`,
                    images: data.photoList.map((photo) => photo.url),
                });
                setCurrentImage(data.photoList?.[0]?.url || placeholderImage);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching product:', err);
                setError(true);
                setLoading(false);
            }
        };

        fetchProduct();
    }, [category, productId]);

    const handleImageError = (e) => {
        e.target.src = placeholderImage;
    };

    if (loading) {
        return <div>Загрузка...</div>;
    }

    if (error || !product) {
        return <div>Ошибка загрузки данных о товаре. Попробуйте позже.</div>;
    }

    return (
        <div className={styles.productDetails}>
            {/* Left Section: Images */}
            <div className={styles.imageSection}>
                <div className={styles.mainImageWrapper}>
                    <img
                        src={currentImage}
                        alt="Основное изображение"
                        className={styles.mainImage}
                        onError={handleImageError}
                    />
                </div>
                <div className={styles.thumbnailWrapper}>
                    {product.images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Превью ${index + 1}`}
                            className={`${styles.thumbnail} ${
                                image === currentImage ? styles.activeThumbnail : ''
                            }`}
                            onClick={() => setCurrentImage(image)}
                            onError={handleImageError}
                        />
                    ))}
                </div>
            </div>

            {/* Right Section: Product Info */}
            <div className={styles.infoSection}>
                <h1 className={styles.name}>{product.name}</h1>
                <p className={styles.year}>Год создания: {product.year}</p>
                <p className={styles.size}>Размер: {product.size}</p>
                <p className={styles.price}>Цена: {product.price}</p>
                <p className={styles.description}>{product.description}</p>
                <p className={styles.category}>Категория: {category}</p>
            </div>
        </div>
    );
};

export default ProductDetails;
