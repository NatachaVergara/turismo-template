import React from 'react'
import HomeContainer from '../Components/HomeContainer'

import { gotoTop, title } from '../utils/funciones'

const Home = () => {
  title('Inicio')
  gotoTop()
  return (
    <main>
      <HomeContainer/>


    </main>
  )
}

export default Home