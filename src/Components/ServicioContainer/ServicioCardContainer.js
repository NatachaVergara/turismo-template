import React from 'react'
import { useContextApp } from '../../Context/AppContext'
import ServicioCard from './ServicioCard'

const ServicioCardContainer = () => {
    const { serviciosInfo } = useContextApp()

    return (
        <div className="services_section_2">
            <div className="row">
                {serviciosInfo ?
                    serviciosInfo.map((s, i) => (
                        <ServicioCard props={s} key={i} />
                    ))
                    :
                    <h1>Cargando</h1>
                }
            </div>
        </div>
    )
}

export default ServicioCardContainer