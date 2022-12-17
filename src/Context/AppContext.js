import serviceImg2 from '../assets/images/img-1.png'
import serviceImg1 from '../assets/images/img-2.png'
import serviceImg3 from '../assets/images/img-3.png'
import React, { createContext, useContext } from 'react'

//Esta constante es la que crea el context y la comparto en la linea 225 como TurismoContext.Provider
const TurismoContext = createContext();

//Esta es la funcion que voy a llamar para utilizar mi props en toda la app. 
export const useContextApp = () => {
    return useContext(TurismoContext)
}




const UseTurismoContextProvider = ({ children }) => {
    const serviciosInfo = [
        {
            id: 1,
            img: serviceImg1,
            alt: "imagen de rafting",
            linkText: "Rafting",
            url: "#"
        },
        {
            id: 2,
            img: serviceImg2,
            alt: "imagen de hiking",
            linkText: "Hiking",
            url: "#"
        },
        {
            id: 3,
            img: serviceImg3,
            alt: "imagen de camping",
            linkText: "Camping",
            url: "#"
        },

    ]





    return (
        <TurismoContext.Provider value={{ serviciosInfo }}>
            {children}
        </TurismoContext.Provider>
    )
}

export default UseTurismoContextProvider