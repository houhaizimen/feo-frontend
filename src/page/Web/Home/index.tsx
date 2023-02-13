import React from 'react'
import Banner from '@/components/web/Banner'
import Invitation from '@/components/web/Invitation'
import CardSwiper from '@/components/web/CardSwiper'
import NFTHolders from '@/components/web/NFTHolders'
import RoadMap from '@/components/web/RoadMap'
import Feoverse from '@/components/web/Feoverse'
import Footer from '@/components/web/Footer'
import ConnectIcon from '@/components/web/ConnectIcon'

const Index = () => {
  return <div className='web-home'>
    <Banner/>
    <Invitation/>
    <CardSwiper/>
    <NFTHolders/>
    <RoadMap/>
    <Feoverse />
    <Footer/>
    <ConnectIcon />
  </div>
}

export default Index
