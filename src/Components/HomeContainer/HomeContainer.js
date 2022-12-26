import React from 'react'
import AboutContainer from '../AboutContainer/AboutContainer'
import DestinosContainer from '../Destinos/DestinosContainer'
import ServicioContainer from '../ServicioContainer'
import Banner from './Banner'

const HomeContainer = () => {
  return (
    <>
      <div className='header_section'>
        <Banner />
      </div>
      <AboutContainer />
      <ServicioContainer />
      <DestinosContainer/>
     


    </>
  )
}

export default HomeContainer