import React from 'react'
import { NFT_HOLDERS_LIST } from '@/config'

const Index = () => {
  return <div className='web-home-nft-holders'>
    <h1 className='title'>Privilege for<br /> NFT Holders</h1>
    <div className='web-home-nft-holders-wrap'>
      {
        NFT_HOLDERS_LIST.map((item, index) => <ul key={item.title}>
          <li>0{index + 1}</li>
          <li>
            <dt>{item.title}</dt>
            <dd>{item.desc}</dd>
          </li>
        </ul>)
      }
      {/* <img className='line' src="./assets/nft-holder-line.png" alt="" /> */}
    </div>
    <img className='web-home-nft-holders-person' src="./assets/nft-holders-right.png" alt="" />
  </div>
}

export default Index
