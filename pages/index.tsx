import React, { ReactElement } from 'react'
import { NextPage } from 'next'

import HomeModule from '../src/modules/Home'

const Home: NextPage = (): ReactElement => {
  return (
    <div>
      <HomeModule />
    </div>
  )
}

export default Home
