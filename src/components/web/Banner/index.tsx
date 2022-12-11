import React from 'react'
import Button from '@/components/common/Button'
import Stepper from '@/components/common/Stepper'

const Index = () => {
  return <div className='web-home-banner'>
    <div className='cont'>
      <h2>START YOUR JOURNEY IN</h2>
      <div className='line' />
      <h1>FIGHTER ERA ODYSSEY</h1>
      <div className='web-home-banner-buy'>
        <dl className='item'>
        {/* Public Sale Whitelist Total Time */}
          <dd>Public Sale</dd>
          {/* <dt>2022.12.28 pm9:00 - 12.29 pm9:00</dt> */}
          <dt>0.05 ETH</dt>
        </dl>
        <dl className='item'>
          <dd>Whitelist</dd>
          <dt>0.04 ETH</dt>
        </dl>
        <dl className='item'>
          <dd>Total</dd>
          <dt>7777</dt>
        </dl>
        <p>Whitelists can mint 8h in advance</p>
        <div className='web-home-banner-buy-step'>
          <Stepper value={3} max={3} min={1}/>
        </div>
        <Button>MINT</Button>
      </div>
    </div>
    <img src="assets/banner-person.png" alt="" className='person'/>
  </div>
}

export default Index
