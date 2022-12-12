import React from 'react'

const Index = () => {
  const list = [
    'In 2077, a world-class mixed martial arts competition in parallel time and space is around the corner. Fighting masters all over the world gather at South Town, and a contest across time and space is about to be staged.',
    'Every fighter would eliminate another opponent in parallel time and space, obtain his/her energy to become stronger.',
    'The fighting competition is approaching. However, fighters are missing one by one, and this might have something to do with a mysterious organization. A terrifying conspiracy is about to emerge…'
  ]
  return <div className='web-home-invitation'>
    <h1 className='title'>SNK Officially<br /> Authorized NFT</h1>
    {
      list.map(item => <p key={item}>{item}</p>)
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
