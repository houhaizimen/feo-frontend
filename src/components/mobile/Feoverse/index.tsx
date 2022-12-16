import React from 'react'

const Index = () => {
  return <div className='m-home-feoverse padding-26'>
    <h1 className='title'>FEOVERSE</h1>
    <p>The FEOVERSE will build an immersive metaverse where fans and collectors could stake their claims in a collaborative world of collecting.</p>
    <div className='m-home-feoverse-wrap'>
      <header>
        <div className='left'>
          <div className='item one'>
            <img src="../assets/feo/m-01.png" alt="" />
            <span>01</span>
            <div className='name'>IRL Cosplay</div>
          </div>
          <div className='item two'>
            <img src="../assets/feo/m-02.png" alt="" />
            <span>02</span>
            <div className='name'>NFT Marketplace</div>
          </div>
        </div>
        <div className='right'>
          <div className='item three'>
            <img src="../assets/feo/m-03.png" alt="" />
            <span>03</span>
            <div className='name'>KOF battle</div>
          </div>
          <div className='item four'>
            <img src="../assets/feo/m-04.png" alt="" />
            <span>04</span>
            <div className='name'>Skin bonus</div>
          </div>
        </div>
      </header>
      <div className='item six'>
        <img src="../assets/feo/m-06.png" alt="" />
        <span>06</span>
        <div className='name'>Virtual Showrooms</div>
      </div>
      <div className='footer'>
        <div className='item five'>
          <img src="../assets/feo/m-05.png" alt="" />
          <span>05</span>
          <div className='name'>Collections</div>
        </div>
        <div className='item seven'>
          <img className='item seven' src="../assets/feo/m-07.png" alt="" />
          <span>07</span>
          <div className='name'>Coming Soon...</div>
        </div>
      </div>
    </div>
  </div>
}

export default Index
