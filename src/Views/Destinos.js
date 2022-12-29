import React from 'react'
import CardSection from '../Components/Destinos/CardSection'
import { useContextApp } from '../Context/AppContext'
import { gotoTop, title } from '../utils/funciones'

const Destinos = () => {
    gotoTop()
    title('Destinos')

    const { destinos } = useContextApp()
    return (
        <main className='container d-flex flex-wrap flex-column justify-content-between align-items-center'>
            <h1>Destinos</h1>
            <div className=' d-flex flex-wrap justify-content-center'>
                {destinos && destinos.map((d, i) => (

                    <CardSection key={i} titulo={d.destino} paises={d.paises} img={d.img} id={d.id} />


                ))}

            </div>
        </main>
    )
}

export default Destinos