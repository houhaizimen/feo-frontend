import React from 'react'

const Index = () => {
  const REWARDS_LIST = [
    'NFT holders can stake their collection to earn candies and fragments of treasure map.',
    'Candies are used to obtain a capsule through Gashapon Machine. The lucky ones might get rare NFTs and multiple limited 3D costumes.',
    'Winners who can collect all the nine pieces of fragments of treasure map can share amazing era token incentives.'
  ]
  const CONFIG_LIST = [
    ['Staked NFT', 'Candy per day', 'Fragment'],
    ['Mai Shiranui NFT x1', 1, '#4'],
    ['Mai Shiranui NFT x3', 4, '#4 #5'],
    ['Mai Shiranui NFT x5', 8, '#4 #5 #6'],
    ['Mai Shiranui NFT x10', 20, '#4 #5 #6 #7']
  ]
  return <div className='web-stake-rewards'>
    <header>
      <div className='left'>
        <h1 className='title'>STAKING REWARDS</h1>
        {
          REWARDS_LIST.map(item => <p key={item}>{item}</p>)
        }
      </div>
      <img src="assets/stake/stake-person.png" className='right' alt="" />
    </header>
    <footer>
      {
        CONFIG_LIST.map(item => <ul key={item[0]}>
          {
            item.map(item1 => <li key={item1}>{item1}</li>)
          }
        </ul>)
      }
    </footer>
  </div>
}

export default Index
