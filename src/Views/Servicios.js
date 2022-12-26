import React from 'react'
import ServicioContainer from '../Components/ServicioContainer'
import { gotoTop, title } from '../utils/funciones'

const Servicios = () => {
    gotoTop()
    title('Servicios')
    return (
        <main data-aos="fade-up">
            <ServicioContainer section={true} />
        </main>
    )
}

export default Servicios