/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const ServicioSectionCard = ({ servicio }) => {
    return (

        <div className="card mb-3 mt-5" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={`https://drive.google.com/uc?export=view&id=${servicio[1].v}`} className="my-5 mx-1" alt={servicio[2].v} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{servicio[2].v}  </h5>
                        <p className="card-text"> {servicio[3].v} </p>
                        <div className="btn-group">
                            <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                Contratar
                            </button>
                            <ul className="dropdown-menu text-center">
                                <li><a className="dropdown-item" href="#"><box-icon name='envelope' animation='tada-hover'></box-icon></a></li>
                                <li><a className="dropdown-item" href="#"><box-icon type='logo' name='whatsapp' animation='tada-hover'></box-icon></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default ServicioSectionCard