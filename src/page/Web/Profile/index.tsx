import React from 'react'

import Footer from '@/components/web/Footer'
import Grandies from './Compnents/gandies'
import MyStake from './Compnents/MyStake'
import MyNFT from './Compnents/MyNFT'
import Map from './Compnents/map'

const Index = () => {
  return <div className='web-profile'>
    <div className='web-profile-cont'>
      <Grandies />
      <MyStake />
      <MyNFT />
      <Map />
    </div>
    <Footer />
  </div>
}

export default Index
