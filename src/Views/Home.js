import React from 'react'
import { gotoTop, title } from '../utils/funciones'

const Home = () => {
  title('Inicio')
  gotoTop()
  return (
    <div>Soy el home</div>
  )
}

export default Home