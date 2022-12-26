import React, { createContext, useContext, useEffect } from 'react'
import useJsCookies from '../Hooks/useCookies';
import { serviciosDB, serviciosSectionDB } from '../utils/BASE_URL';

//Esta constante es la que crea el context y la comparto en la linea 225 como TurismoContext.Provider
const TurismoContext = createContext();

//Esta es la funcion que voy a llamar para utilizar mi props en toda la app. 
export const useContextApp = () => {
    return useContext(TurismoContext)
}




const UseTurismoContextProvider = ({ children }) => {
    const [serviciosData, setServiciosData] = useJsCookies('serviciosData', [], 7)
    const [serviciosDataSection, setServiciosDataSection] = useJsCookies('serviciosDataSection', [], 7)



    useEffect(() => {
        const getServicios = async () => {
            fetch(serviciosDB)
                .then(res => res.text())
                .then(data => {
                    const servicios = JSON.parse(data.substr(47).slice(0, -2));
                    //console.log(servicios.table.rows)
                    setServiciosData(servicios.table.rows)
                })
                .catch((e) => console.log(`Hubo un problema con la petición: ${e}`))
        }
        getServicios()


        const getServiciosSection = async () => {
            fetch(serviciosSectionDB)
                .then(res => res.text())
                .then(data => {
                    const servicios = JSON.parse(data.substr(47).slice(0, -2));
                    // console.log(servicios.table.rows)
                    setServiciosDataSection(servicios.table.rows)

                })

        }
        getServiciosSection()

    }, [setServiciosData, setServiciosDataSection])

    const destinos = [
        {
            id: 1,
            destino: 'África',
            texto: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'

        },
        {
            id: 2,
            destino: 'América',
            texto: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'

        },
        {
            id: 3,
            destino: 'Asia',
            texto: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'

        },
        {
            id: 4,
            destino: 'Europa',
            texto: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'

        },
        {
            id: 5,
            destino: 'Oceanía',
            texto: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'

        },

    ]




    return (
        <TurismoContext.Provider value={{ serviciosData, serviciosDataSection, destinos }}>
            {children}
        </TurismoContext.Provider>
    )
}

export default UseTurismoContextProvider