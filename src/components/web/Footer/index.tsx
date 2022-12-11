import React from 'react'
import { useNavigate } from 'react-router-dom'
import { connectList } from '@/config'

const Index = () => {
  const navigate = useNavigate()
  const contList = [
    { name: 'PRIVACY POLICY', link: '' },
    { name: 'TERMS', link: '/terms' }
  ]
  const handleJump = (item: any) => {
    navigate(item.link)
  }
  return <div className='web-home-footer'>
    <div className='web-home-footer-top'>
      <img src="assets/logo.png" alt="" />
      <ul className='cont'>
        {
          contList.map(item => <li onClick={() => handleJump(item)} key={item.name}>{item.name}</li>)
        }
        <li>
          <a href='mailto:1679997020@qq.com'>CONTACT US</a>
        </li>
      </ul>
      <div className='link'>
        {
          connectList.map(item => <img onClick={() => window.open(item.link)} key={item.icon} src={`assets/${item.icon}.png`} alt="" />)
        }
      </div>
    </div>
    <p>© 2022 Crack, LCC. All rights reserved</p>
  </div>
}

export default Index
