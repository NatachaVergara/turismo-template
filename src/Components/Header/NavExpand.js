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
                    <li><NavLink to="/sobre">Sobre Nosotros</NavLink></li>
                    <li><NavLink to="/servicios">Servicios</NavLink></li>
                    <li><NavLink to="/destinos">Destinos</NavLink></li>
                    <li><a href="contact.html">Contacto</a></li>
                </ul>
            </div>
        </div>
    )
}

export default NavExpand