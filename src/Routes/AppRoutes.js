import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../Views/About';
import Destinos from '../Views/Destinos';
import Error from '../Views/Error';
import Home from '../Views/Home';
import Servicios from '../Views/Servicios';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/inicio' element={<Home />} />
            <Route path='/sobre' element={<About />} />
            <Route path='/servicios' element={<Servicios />} />
            <Route path='/destinos' element={<Destinos />} />
            <Route path='*' element={<Error />} />
        </Routes>
    )
}

export default AppRoutes