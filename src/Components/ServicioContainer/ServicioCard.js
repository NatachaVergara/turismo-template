import React from 'react'
import { Link } from 'react-router-dom'

const ServicioCard = ({ servicio }) => {

    return (
        <div className="col-md-4 cardEfect">
            <div>
                <img src={`https://drive.google.com/uc?export=view&id=${servicio[1].v}`} alt={servicio[2].v} className="services_img" />
            </div>
            <div className="btn_main"><Link to={servicio[4].v}>{servicio[3].v} </Link></div>
        </div>
    )
}

export default ServicioCard