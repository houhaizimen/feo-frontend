import React from 'react'

const Index = () => {
  const list = [
    'In 2077, a world-class mixed martial arts competition in parallel time and space will be held soon. South Town is a city where fighting masters from all over the world gather, and a contest across time and space is about to be staged here.',
    'Every fighter needs to eliminate another opponent in parallel time and space then obtain the opponent’s energy to continue to become stronger.',
    'The new fighting competition is about to start, but the contestants are missing frequently, and the blame of all this can’t help to point to a mysterious organization. A terrifying conspiracy is about to be revealed…'
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
