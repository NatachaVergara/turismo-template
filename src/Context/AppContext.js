import React, { createContext, useContext } from 'react'

//Esta constante es la que crea el context y la comparto en la linea 225 como TurismoContext.Provider
const TurismoContext = createContext();

//Esta es la funcion que voy a llamar para utilizar mi props en toda la app. 
export const useContextApp = () => {
    return useContext(TurismoContext)
}




const UseTurismoContextProvider = ({ children }) => {




    return (
        <TurismoContext.Provider value={{}}>
            {children}
        </TurismoContext.Provider>
    )
}

export default UseTurismoContextProvider