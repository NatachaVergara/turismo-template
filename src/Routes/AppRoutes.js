import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Error } from '../Views/Error'
import Home from '../Views/Home'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/inicio' element={<Home />} />
            <Route path='*' element={<Error />} />
        </Routes>
    )
}

export default AppRoutes