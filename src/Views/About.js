import React from 'react'
import AboutContainer from '../Components/AboutContainer'
import { gotoTop } from '../utils/funciones'



const About = () => {
    gotoTop()
    return (
        <main>
            <AboutContainer section={true} />
            
        </main>
    )
}

export default About