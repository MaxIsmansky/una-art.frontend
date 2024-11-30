import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from '../pages/home/Home';
import Error from "../pages/Error";
import NotFound from "../components/not-found/NotFound";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/error" element={<Error/>}/>
                {/* Обработка неизвестных маршрутов */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
