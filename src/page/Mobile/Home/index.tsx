import React from 'react'
import Banner from '@/components/mobile/Banner'
import Invitation from '@/components/mobile/Invitation'
import CardSwiper from '@/components/mobile/CardSwiper'
import NFTHolders from '@/components/mobile/NFTHolders'
import RoadMap from '@/components/mobile/RoadMap'
import Feoverse from '@/components/mobile/Feoverse'
import Footer from '@/components/mobile/Footer'

const Index = () => {
  return <div className='m-home'>
    <Banner/>
    <Invitation/>
    <CardSwiper/>
    <NFTHolders/>
    <RoadMap/>
    <Feoverse />
    <Footer/>
  </div>
}

export default Index
