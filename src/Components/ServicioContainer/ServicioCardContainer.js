import React from 'react'
import { useContextApp } from '../../Context/AppContext'
import ServicioCard from './ServicioCard'

const ServicioCardContainer = () => {
    const { serviciosData } = useContextApp()

    return (
        <div className="services_section_2">
            <div className="row">
                {serviciosData ?
                    serviciosData.map((s, i) => (
                        <ServicioCard servicio={s.c} key={i} />
                    ))
                    :
                    <h1>Cargando....</h1>
                }
            </div>
        </div>
    )
}

export default ServicioCardContainer