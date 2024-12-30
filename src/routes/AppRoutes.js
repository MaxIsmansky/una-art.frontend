import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from '../pages/home/Home';
import Error from "../pages/Error";
import NotFound from "../components/not-found/NotFound";
import Contacts from "../pages/contacts/Contacts";
import About from "../pages/about/About";
import Shop from "../pages/shop/Shop";
import Paintings from "../pages/shop/paintings/Paintings";
import Sculptures from "../pages/shop/sculptures/Sculptures";
import Accessories from "../pages/shop/accessories/Accessories";
import ProductDetails from "../pages/shop/product-details/ProductDetails";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/error" element={<Error/>}/>
            <Route path="/contacts" element={<Contacts/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/shop/paintings" element={<Paintings/>}/>
            <Route path="/shop/sculptures" element={<Sculptures/>}/>
            <Route path="/shop/accessories" element={<Accessories/>}/>
            <Route path="/shop/:category/:productId" element={<ProductDetails />} />
            {/* Обработка неизвестных маршрутов */}
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
};

export default AppRoutes;
