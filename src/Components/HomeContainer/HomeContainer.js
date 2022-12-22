import React from 'react'
import AboutContainer from '../AboutContainer/AboutContainer'
import ServicioContainer from '../ServicioContainer'
import Banner from './Banner'

const HomeContainer = () => {
  return (
    <>
      <div className='header_section'>
        <Banner />
      </div>
      <ServicioContainer />
      <AboutContainer />


    </>
  )
}

export default HomeContainer