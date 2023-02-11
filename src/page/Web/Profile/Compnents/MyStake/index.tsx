import React from 'react'
import ContainerBg from '@/components/common/ContainerBg'
import Button from '@/components/common/Button'

const Index = () => {
  const TITLE_LIST = ['NFT', 'Start date', 'End date', 'Expected candies', 'Expected fragments']
  // const RES_LIST = [
  //   { nft: 'Mai Shiranui x3', start: '1.18', end: '1.20', candies: '72', fragments: '#4' }
  // ]
  const RES_LIST: any[] = []
  return <div className='web-profile-my-stake'>
    <h1 className='profile-title'>My staking</h1>
    <ContainerBg className='web-profile-my-stake-wrap'>
      {
        RES_LIST.length === 0 && <p>You can earn more candies and fragments of treasure map by staking.</p>
      }
      {
        RES_LIST.length > 0 && <div className='stake-list'>
          {
            <ul>
              {
                TITLE_LIST.map(item => <li key={item}>{item}</li>)
              }
            </ul>
          }
          {
            RES_LIST.map((item, index) => <ul key={index}>
              <li>{item.nft}</li>
              <li>{item.start}</li>
              <li>{item.end}</li>
              <li>{item.candies}</li>
              <li>{item.fragments}</li>
            </ul>)
          }
        </div>
      }
      <Button size='medium'>To staking</Button>
    </ContainerBg>
  </div>
}

export default Index
