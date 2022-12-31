import React from 'react'
import { Link } from 'react-router-dom'
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
                            <Link className="nav-link" to="/inicio" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/sobre" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Sobre Nosotros</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/servicios" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Servicios</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/destinos" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Destinos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/inicio" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Contacto</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavMovile