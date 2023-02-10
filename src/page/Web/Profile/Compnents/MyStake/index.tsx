import React from 'react'
import ContainerBg from '@/components/common/ContainerBg'
import Button from '@/components/common/Button'

const Index = () => {
  return <div className='web-profile-my-stake'>
    <h1 className='profile-title'>My staking</h1>
    <ContainerBg className='web-profile-my-stake-wrap'>
      {
        <p>You can earn more candies and fragments of treasure map by staking.</p>
      }
      <Button size='medium'>To staking</Button>
    </ContainerBg>
  </div>
}

export default Index
