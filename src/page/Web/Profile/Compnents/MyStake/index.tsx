import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import ContainerBg from '@/components/common/ContainerBg'
import Button from '@/components/common/Button'

const Index = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const ts: Record<string, any> = t('PROFILE.MYSTAKE', { returnObjects: true })
  // const RES_LIST = [
  //   { nft: 'Mai Shiranui x3', start: '1.18', end: '1.20', candies: '72', fragments: '#4' }
  // ]
  const RES_LIST: any[] = []
  return <div className='web-profile-my-stake'>
    <h1 className='profile-title'>{ts.title}</h1>
    <ContainerBg className='web-profile-my-stake-wrap'>
      {
        RES_LIST.length === 0 && <p>{ts.desc}</p>
      }
      {
        RES_LIST.length > 0 && <div className='stake-list'>
          {
            <ul>
              {
                ts.TITLE_LIST.map((item: string) => <li key={item}>{item}</li>)
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
      <Button size='medium' onClick={() => navigate('/stake')}>{ts.to}</Button>
    </ContainerBg>
  </div>
}

export default Index
