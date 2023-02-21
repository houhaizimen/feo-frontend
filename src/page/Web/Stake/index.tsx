import React from 'react'

import Footer from '@/components/web/Footer'
import Banner from './Components/Banner'
import Rewards from './Components/Rewards'
import Step1 from './Components/Step1'
import Step2 from './Components/Step2'

const Index = () => {
  return <div className='web-stake'>
    <div className='web-stake-cont'>
      <Banner />
      <Rewards />
      <Step1 />
      <Step2 />
    </div>
    <Footer />
  </div>
}

export default Index
