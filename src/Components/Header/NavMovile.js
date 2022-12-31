import React from 'react'
import {  useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo.png'


const NavMovile = () => {
    let navigate = useNavigate();
    const onHandleClick = (to)=>{
       navigate(to)
    }
    
    
    
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
                            <p className="nav-link" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={()=> onHandleClick('/inicio')}>Inicio</p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"onClick={()=> onHandleClick('/sobre')} >Sobre Nosotros</p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link"data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"  onClick={()=> onHandleClick('/servicios')} >Servicios</p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link " data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={()=> onHandleClick('/destinos')} >Destinos</p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link " data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={()=> onHandleClick('/inicio')} >Contacto</p>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavMovile