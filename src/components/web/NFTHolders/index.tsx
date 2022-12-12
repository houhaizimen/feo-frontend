import React from 'react'

const Index = () => {
  const list = [
    { title: 'SNK Fan Community', desc: 'Make new friends with big fan of SNK' },
    { title: 'Priority Purchasing', desc: 'Your collection is the key to next series of NFT and events IRL' },
    { title: 'Unlock Exclusive Experience', desc: 'Amazing KOF battles and gaming' }
  ]
  return <div className='web-home-nft-holders'>
    <h1 className='title'>Privilege for<br /> NFT Holders</h1>
    <div className='web-home-nft-holders-wrap'>
      <img className='web-home-nft-holders-wrap-text' src="./assets/nft-holder-text.png" alt="" />
      {
        list.map((item, index) => <ul key={item.title}>
          <li>0{index + 1}</li>
          <li>
            <dt>{item.title}</dt>
            <dd>{item.desc}</dd>
          </li>
        </ul>)
      }
      <img className='line' src="./assets/nft-holder-line.png" alt="" />
    </div>
    <img className='web-home-nft-holders-person' src="./assets/card/9.png" alt="" />
  </div>
}

export default Index
