import React from 'react'
import { useTranslation } from 'react-i18next'
import Footer from '@/components/mobile/Footer'

const Index = () => {
  const { t } = useTranslation()
  const ts: Record<string, any> = t('GALLERY', { returnObjects: true })
  return <div className='m-gallery'>
    <div className='m-gallery-cont'>
      <h1 className='title' dangerouslySetInnerHTML={{ __html: ts.title }}/>
      <ul className='tips'>
        {
          ts.GALLERY_TOP_LIST.map((item: any) => {
          return <li key={item.title}>
            <div style={{
            backgroundImage: `url(../assets/m/${item.icon}.png)`
          }}><h2>{item.title}</h2></div>
            <p>{item.desc}</p>
          </li>
          })
        }
      </ul>
      <ul className='card'>
        {
          ts.GALLERY_BOTTOM_LIST.map((item: any) => {
          return <li key={item.title} style={{
            backgroundImage: `url(../assets/m/${item.icon}.png)`
          }}>
            <h1>{item.title}</h1>
          </li>
          })
        }
      </ul>
    </div>
    <Footer />
  </div>
}

export default Index
