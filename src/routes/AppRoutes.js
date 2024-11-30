import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from '../pages/home/Home';
import Error from "../pages/Error";
import NotFound from "../components/not-found/NotFound";
import Contacts from "../pages/contacts/Contacts";
import About from "../pages/about/About";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/error" element={<Error/>}/>
            <Route path="/contacts" element={<Contacts/>}/>
            <Route path="/about" element={<About/>}/>
            {/* Обработка неизвестных маршрутов */}
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
};

export default AppRoutes;
