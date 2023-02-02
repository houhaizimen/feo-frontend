import React from 'react'
import { useNavigate } from 'react-router-dom'
import { connectList } from '@/config'

const Index = () => {
  const navigate = useNavigate()
  const contList = [
    { name: 'TERMS', link: '/terms' }
  ]
  const handleJump = (item: any) => {
    navigate(item.link)
  }
  return <div className='web-home-footer'>
    <div className='web-home-footer-top'>
      <img src="assets/logo.png" alt="" />
      <ul className='cont'>
        <li>
          <a href='https://fighter-era-odyssey.gitbook.io/privacy-policy/'>PRIVACY POLICY</a>
        </li>
        {
          contList.map(item => <li onClick={() => handleJump(item)} key={item.name}>{item.name}</li>)
        }
        <li>
          <a href='https://fighter-era-odyssey.gitbook.io/docs/'>WHITEPAPER</a>
        </li>
        <li>
          {/* <a href='mailto:FEO.SNK@gmail.com'>CONTACT US</a> */}
          <a href='mailto:feoverse@gmail.com'>CONTACT US</a>
        </li>
      </ul>
      <div className='link'>
        {
          connectList.map(item => <img onClick={() => window.open(item.link)} key={item.icon} src={`assets/${item.icon}.png`} alt="" />)
        }
      </div>
    </div>
    <p>©SNK CORPORATION ALL RIGHTS RESERVED.</p>
    <p>©FEOVERSE, LCC. ALL RIGHTS RESERVED.</p>
  </div>
}

export default Index
