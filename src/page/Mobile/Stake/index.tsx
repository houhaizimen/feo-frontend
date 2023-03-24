import React from 'react'

import Footer from '@/components/mobile/Footer'
import Banner from './Components/Banner'
import Rewards from './Components/Rewards'
import Step1 from './Components/Step1'
import Step2 from './Components/Step2'
import Step3 from './Components/Step3'

const Index = () => {
  return <div className='m-stake'>
    <div className='m-stake-cont'>
      <Banner />
      <Rewards />
      <Step1 />
      <Step2 />
      <Step3 />
      <Footer />
    </div>
  </div>
}

export default Index
