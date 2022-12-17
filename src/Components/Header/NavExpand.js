import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

const NavExpand = () => {
    return (
        <div className="container-fluid">
            <div className="logo"><a href="index.html"><img src={logo} alt='Logo' /></a></div>
            <div className="menu_main">
                <ul>
                    <li><NavLink to="/inicio" className="active">Inicio</NavLink></li>
                    <li><a href="about.html">Sobre Nosotros</a></li>
                    <li><a href="services.html">Servicios</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="contact.html">Contacto</a></li>
                </ul>
            </div>
        </div>
    )
}

export default NavExpand