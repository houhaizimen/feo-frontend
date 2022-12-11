import React from 'react'

const Index = () => {
  return <div className='web-home-feoverse'>
    <h1>FEOVERSE</h1>
    <p>The FEOVERSE will offer an immersive metaverse in which fans and collectors can stake their claim in a new and collaborative world of collecting.</p>
    <div className='web-home-feoverse-wrap'>
      <div className='item one'>
        <img src="./assets/feo/01.png" alt="" />
        <span>01</span>
        <div className='name'>IRL Cosplay</div>
      </div>
      <div className='right'>
        <div className='item three'>
          <img src="./assets/feo/03.png" alt="" />
          <span>03</span>
          <div className='name'>KOF battle</div>
        </div>
        <div className='item six'>
          <img src="./assets/feo/06.png" alt="" />
          <span>06</span>
          <div className='name'>Virtual Showrooms</div>
        </div>
        <div className='item five'>
          <img src="./assets/feo/05.png" alt="" />
          <span>05</span>
          <div className='name'>Collections</div>
        </div>
        <div className='item four'>
          <img src="./assets/feo/04.png" alt="" />
          <span>04</span>
          <div className='name'>Skin bonus</div>
        </div>
        <div className='item seven'>
          <img className='item seven' src="./assets/feo/07.png" alt="" />
          <span>07</span>
          <div className='name'>Coming SOON...</div>
        </div>
      </div>
      <div className='item two'>
        <img src="./assets/feo/02.png" alt="" />
        <span>02</span>
        <div className='name'>NFT Marketplace</div>
      </div>
    </div>
  </div>
}

export default Index
