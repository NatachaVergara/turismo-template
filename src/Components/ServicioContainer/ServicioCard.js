import React from 'react'

const ServicioCard = ({ props }) => {
 
    return (
        <div className="col-md-4 cardEfect">
            <div>
                <img src={props.img} alt={props.alt} className="services_img" />
            </div>
            <div className="btn_main"><a href={props.url}>{props.linkText} </a></div>
        </div>
    )
}

export default ServicioCard