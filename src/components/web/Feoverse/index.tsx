import React from 'react'
import { useTranslation } from 'react-i18next'

const Index = () => {
  const { t } = useTranslation()
  const ts: Record<string, any> = t('FEOVERSE', { returnObjects: true })
  return <div className='web-home-feoverse'>
    <h1 className='title'>{ts.title}</h1>
    <p>{ts.desc}</p>
    <div className='web-home-feoverse-wrap'>
      <div className='item one'>
        <img src="./assets/feo/01.png" alt="" />
        <span>01</span>
        <div className='name'>{ts.card1}</div>
      </div>
      <div className='right'>
        <div className='item three'>
          <img src="./assets/feo/03.png" alt="" />
          <span>03</span>
          <div className='name'>{ts.card3}</div>
        </div>
        <div className='item six'>
          <img src="./assets/feo/06.png" alt="" />
          <span>05</span>
          <div className='name'>{ts.card6}</div>
        </div>
        <div className='item five'>
          <img src="./assets/feo/05.png" alt="" />
          <span>06</span>
          <div className='name'>{ts.card5}</div>
        </div>
        <div className='item four'>
          <img src="./assets/feo/04.png" alt="" />
          <span>04</span>
          <div className='name'>{ts.card4}</div>
        </div>
        <div className='item seven'>
          <img className='seven' src="./assets/feo/07.png" alt="" />
          <span>07</span>
          <div className='name'>{ts.card7}</div>
        </div>
      </div>
      <div className='item two'>
        <img src="./assets/feo/02.png" alt="" />
        <span>02</span>
        <div className='name'>{ts.card2}</div>
      </div>
    </div>
  </div>
}

export default Index
