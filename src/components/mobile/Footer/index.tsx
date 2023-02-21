import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { connectList } from '@/config'

const Index = () => {
  const { t } = useTranslation()
  const ts: Record<string, any> = t('FOOTER', { returnObjects: true })
  const navigate = useNavigate()
  const contList = [
    { name: ts.TERMS, link: '/m/terms' }
  ]
  const handleJump = (item: any) => {
    navigate(item.link)
  }
  return <div className='m-home-footer'>
      <img src="../assets/logo.png" alt="" />
    <div className='m-home-footer-top'>
      <ul className='cont'>
        <li>
        <a href='https://fighter-era-odyssey.gitbook.io/privacy-policy/'>{ts.PRIVACY}</a>
        </li>
        {
          contList.map(item => <li onClick={() => handleJump(item)} key={item.name}>{item.name}</li>)
        }
        <li>
        <a href='https://fighter-era-odyssey.gitbook.io/docs/'>{ts.WHITEPAPER}</a>
        </li>
        <li>
          <a href='mailto:feoverse@gmail.com'>{ts.CONTACT}</a>
          {/* <a href='mailto:FEO.SNK@gmail.com'>CONTACT US</a> */}
        </li>
      </ul>
      <div className='link'>
        {
          connectList.map(item => <img onClick={() => window.open(item.link)} key={item.icon} src={`../assets/${item.icon}.png`} alt="" />)
        }
      </div>
    </div>
    {
      ts.copyright.map((item: string) => <p key={item}>{item}</p>)
    }
  </div>
}

export default Index
