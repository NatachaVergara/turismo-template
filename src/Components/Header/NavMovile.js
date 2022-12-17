import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.png'


const NavMovile = () => {
  return (
    <div className="mobile_menu">
    <nav className="navbar navbar-expand-lg navbar-light">
        <div className="logo_mobile mx-3 mx-l0"><a href="index.html"><img src={logo} alt='Logo' /></a></div>
        <button className="navbar-toggler m-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/inicio">Inicio</NavLink>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="about.html">Sobre Nosotros</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="services.html">Servicios</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link " href="blog.html">Blog</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link " href="contact.html">Contacto</a>
                </li>
            </ul>
        </div>
    </nav>
</div>
  )
}

export default NavMovile