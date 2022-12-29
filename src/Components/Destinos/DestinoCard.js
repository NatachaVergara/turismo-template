/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useParams } from 'react-router-dom'
import { gotoTop, title } from '../../utils/funciones'

const DestinoCard = () => {
    const { pais } = useParams()
    gotoTop()
    title(pais)
    console.log(pais)
    return (
        <>
            <h1 className='text-center mt-5'>{pais}</h1>
            <div className='row container mt-5'>
                <div className='col-12 mt-3 mt-md-0 col-md-4'>
                    <h3>Recorrido <box-icon type='solid' name='plane-take-off'></box-icon></h3>
                    <p className=''><box-icon type='solid' name='city'></box-icon> Ciudades: 'lorem' - 'lorem' - 'lorem' </p>
                    <p><box-icon type='solid' name='calendar'></box-icon> Fechas de salida: 03/2023 - 04/2023 </p>
                    <p><box-icon name='bus'></box-icon> Incluye vuelo y traslado: Si </p>
                </div>
                <div className='col-12 mt-5 mt-md-0 col-md-4'>
                    <img src="https://www.entornoturistico.com/wp-content/uploads/2016/01/turismo-1280x720.jpg" className="card-img-top rounded" alt="..." />
                </div>
                <div className='col-12 mt-5 mt-md-0 col-md-4 '>
                    <h3>Incluye</h3>
                    <p><box-icon type='solid' name='hotel'></box-icon> Estadía: Si</p>
                    <p><box-icon type='solid' name='food-menu'></box-icon>Desayuno: Si</p>
                    <p><box-icon type='solid' name='lock-alt'></box-icon>lorem</p>
                    <p><box-icon name='dish'></box-icon> lorem</p>
                </div>
            </div>

            <div className="text-center">
                <h2 className='mt-5'>Contratar</h2>
                <a href="#" className="card-link"><box-icon type='solid' name='envelope' animation='tada-hover'></box-icon> </a>
                <a href="#" className="card-link"><box-icon type='logo' name='whatsapp' animation='tada-hover'></box-icon></a>
            </div>
        </>
    )
}

export default DestinoCard