import React from 'react'
import AboutContainer from '../Components/AboutContainer'
import { gotoTop, title } from '../utils/funciones'



const About = () => {
    gotoTop()
    title('Sobre Nosotros')
    return (
        <main>
            <AboutContainer section={true} />            
        </main>
    )
}

export default About