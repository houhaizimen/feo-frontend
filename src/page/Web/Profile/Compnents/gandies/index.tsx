import React from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '@/components/common/Button'

const Index = () => {
  const navigate = useNavigate()
  return <div className='web-profile-gendies'>
    <div className='left'>
      <h1 className='profile-title'>Candies</h1>
      <dl>
        <dt>Number of candies: <span>0</span></dt>
        <dd>Yield of candies: <span>0</span></dd>
      </dl>
    </div>
    <Button size='large' onClick={() => navigate('/repoch')}>To Gashapon</Button>
  </div>
}

export default Index
