import React, { useState } from 'react'

import Footer from '@/components/web/Footer'
import ConnectIcon from '@/components/web/ConnectIcon'
import ContainerBg from '@/components/common/ContainerBg'
import Button from '@/components/common/Button'
import BuySuccessModal from './Components/BuySuccess'

const Index = () => {
  const [show, setShow] = useState<Boolean>(false)
  const REPOCH_LIST = [
    ['Reward', 'Probability', 'Details'],
    ['Candy bag', '55%', '1-100 Candies'],
    ['Treasure bag', '40%', 'fragment #1-#9'],
    ['NFT', '5%', 'Kachousen NFT<br /> Rare Mai Shiranui NFT<br /> 3D Costume NFT']
  ]
  return <div className='web-repoch'>
    <div className='web-repoch-cont'>
      <h1 className='title'>Gashapon Machine</h1>
      <p>In R-Epoch, fighters can uplock new skills through the Gashapon Machine</p>
      <div className='web-repoch-cont-candy'>
        <img src="assets/stake/icon-candy.png" alt="" />
        <span>MY CANDY：0</span>
      </div>
      <ContainerBg className='web-repoch-cont-rule'>
        <div className='left'>
          <img src="assets/stake/egg-machine.png" alt="" />
          <Button>Open</Button>
        </div>
        <div className='right'>
          <h2>Spend <span>10</span> candies to <br />get a capsule</h2>
          <p>Have a try. You are the lucky one!</p>
          <div className='detail'>
            {
              REPOCH_LIST.map(item => <ul key={item[0]}>
                {
                  item.map(item1 => <li dangerouslySetInnerHTML={{ __html: item1 }}/>)
                }
              </ul>)
            }
          </div>
        </div>
      </ContainerBg>
    </div>
    <Footer />
    <ConnectIcon />
    <BuySuccessModal show={show} onClose={() => setShow(false)}/>
  </div>
}

export default Index
