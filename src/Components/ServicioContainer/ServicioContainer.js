import React from 'react'
import ServicioCardContainer from './ServicioCardContainer'
import ServicioSectionContainer from './ServicioSectionContainer'


const ServicioContainer = ({ section }) => {
    return (

        // <!-- services section start -->
        <div className="services_section layout_padding animate__animated animate__bounceInLeft">
            <div className="container">
                <h1 className="services_taital">Servicios </h1>
                <p className="services_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis facere ab exercitationem blanditiis libero ex quas eveniet! Officia quis earum accusamus architecto, illo, itaque maiores temporibus cum nostrum deserunt veritatis.
                    Ipsa officia quasi deserunt laborum vel iusto sunt distinctio inventore explicabo eaque impedit aliquid reprehenderit, accusantium a? Mollitia eligendi quia sunt, voluptatem cumque expedita libero omnis harum, aut nisi nam!
                    Neque odio adipisci libero, quidem beatae labore placeat quibusdam magnam esse, porro a deserunt veniam. Quas doloremque consequuntur natus nobis magni quam provident. Sapiente sed illo obcaecati architecto modi assumenda.</p>
                {section ? <ServicioSectionContainer /> : <ServicioCardContainer />}
            </div>
        </div>
        // {/* <!-- services section end --> */}




    )
}

export default ServicioContainer