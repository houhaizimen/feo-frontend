import React, { useState } from 'react'
import ContainerBg from '@/components/common/ContainerBg'
import Button from '@/components/common/Button'

const Index = () => {
  const [NFTList, setNFTList] = useState<string[]>([])
  console.log(setNFTList)
  return <div className='web-profile-my-nft'>
    <h1 className='profile-title'>My NFT</h1>
    <ContainerBg className='web-profile-my-nft-wrap'>
      {
        NFTList.length === 0 && <p>You don’t have any collection yet.</p>
      }
      {
        <div className='card-list'>
        {
          '123456789'.split('').map(item => <div className='card'>
            <p>1111111111111111</p>
            <img src={`assets/card/${item}.png`} alt="" />
          </div>)
        }
      </div>
      }
      {
        NFTList.length === 0 && <Button size='medium'>To Buy</Button>
      }
    </ContainerBg>
  </div>
}

export default Index
