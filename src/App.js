import './assests/styles/App.css';
import Header from "./components/header/Header";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/footer/Footer";


function App() {
    return (
        <div className="app">
            <Header/>
            <main className="content">
                <AppRoutes/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
