import React from 'react'
import { useTranslation } from 'react-i18next'
import ContainerBg from '@/components/common/ContainerBg'

import Button from '@/components/common/Button'

const Index = () => {
  const { t } = useTranslation()
  const ts: Record<string, any> = t('PROFILE.MAP', { returnObjects: true })
  const list = [
    { src: '1', sum: 0 },
    { src: '2', sum: 0 },
    { src: '3', sum: 0 },
    { src: '4', sum: 0 },
    { src: '5', sum: 0 },
    { src: '6', sum: 0 },
    { src: '7', sum: 0 },
    { src: '8', sum: 0 },
    { src: '9', sum: 0 }
  ]
  return <div className='web-profile-map'>
    <h1 className='profile-title'>
      {ts.title}
      <div className='question'>
        <div className='question-cont'>
          <h3>How to get fragments #1 - #9</h3>
          {
            ts.QUESTION_LIST.map((item: any) => <ul key={item[0]} className='question-cont-list'>
              {
                item.map((items: string) => <li>{items}</li>)
              }
            </ul>)
          }
          <p>* {ts.desc}</p>
        </div>
      </div>
    </h1>
    <ContainerBg className='web-profile-map-wrap'>
      <p>{ts.title2}<br /> {ts.title3}</p>
      <div className='web-profile-map-wrap-cont'>
        {
          list.map(item => <div key={item.src}>
            <img src={`assets/puzzleCard/${item.src}.png`} alt="" />
            {
              item.sum > 0 && <span>{item.sum}</span>
            }
          </div>)
        }
      </div>
      <Button size='medium' disabled>{ts.synthesize}</Button>
    </ContainerBg>
  </div>
}

export default Index
