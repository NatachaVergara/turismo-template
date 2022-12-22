import React from 'react'
import { useContextApp } from '../../Context/AppContext'
import ServicioSectionCard from './ServicioSectionCard'

const ServicioSectionContainer = () => {
    const { serviciosDataSection } = useContextApp()


    return (
        <div className='container d-flex flex-wrap justify-content-between align-items-center'  >
            {
                serviciosDataSection && serviciosDataSection.map((servicio, i) => (
                    <ServicioSectionCard servicio={servicio.c} key={i} />
                ))

            }
        </div>
    )
}

export default ServicioSectionContainer