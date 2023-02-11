import React from 'react'
import Button from '@/components/common/Button'

const Index = () => {
  return <div className='web-profile-gendies'>
    <div className='left'>
      <h1 className='profile-title'>Candies</h1>
      <dl>
        <dt>Number of candies: <span>0</span></dt>
        <dd>Yield of candies: <span>0</span></dd>
      </dl>
    </div>
    <Button size='large'>To Gashapon</Button>
  </div>
}

export default Index
