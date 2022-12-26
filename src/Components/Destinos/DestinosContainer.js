import React from 'react'
import { useContextApp } from '../../Context/AppContext'
import CardHome from './CardHome'

const DestinosContainer = () => {

    const { destinos } = useContextApp()




    return (
        <div className='about_section layout_padding" data-aos="fade-left"'>
            <div className="container">
                <div className="row d-flex flex-column-reverse flex-md-row">
                    <div className='about_taital_main p-3 p-md-none'>
                        <h2 className='about_taital mt-5 mt-md-none'> Destinos</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda reiciendis sed distinctio omnis soluta sunt cumque molestias aliquid doloribus voluptatem? Amet inventore mollitia reiciendis, laborum aliquid quasi aliquam animi adipisci?
                            Magnam architecto nihil, quasi quos sit molestiae debitis autem quidem saepe magni beatae, aperiam aliquam eveniet tempora ut corrupti libero eius a vero dignissimos ipsam illo reiciendis placeat ipsum.</p>
                    </div>
                </div>
            </div>
            <div className='container d-flex flex-wrap justify-content-around align-items-center'>

                {destinos && destinos.map((d, i) => (
                    <CardHome key={i} title={d.destino} texto={d.texto} />
                ))}

            </div>

        </div>
    )
}

export default DestinosContainer