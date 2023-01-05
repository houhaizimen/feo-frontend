import React from 'react'
import { NFT_HOLDERS_LIST } from '@/config'

const Index = () => {
  return <div className='m-home-nft-holders padding-26'>
    <h1 className='title'>Privilege for NFT Holders</h1>
    <div className='m-home-nft-holders-wrap'>
      {/* <img className='m-home-nft-holders-wrap-text' src="./assets/nft-holder-text.png" alt="" /> */}
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
    <img className='m-home-nft-holders-person' src="../assets/m/m-nft-holder-person.png" alt="" />
  </div>
}

export default Index
