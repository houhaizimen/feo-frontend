import React from 'react'
import { INVITATION_LIST } from '@/config'

const Index = () => {
  return <div className='web-home-invitation'>
    <h1 className='title'>SNK Officially<br /> Authorized NFT</h1>
    {
      INVITATION_LIST.map(item => <p key={item}>{item}</p>)
    }
    <div className='web-home-invitation-star'>
      <img className='invitation' src="assets/invitation.png" alt="" />
      <img className='bg' src="assets/invitation-bg.png" alt="" />
      <img className='star-1' src="assets/star-1.png" alt="" />
      <img className='star-2' src="assets/star-2.png" alt="" />
      <img className='star-3' src="assets/start-3.png" alt="" />
    </div>
  </div>
}

export default Index
