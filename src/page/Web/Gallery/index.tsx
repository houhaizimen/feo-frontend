import React from 'react'
import { useTranslation } from 'react-i18next'
import Footer from '@/components/web/Footer'

const Index = () => {
  const { t } = useTranslation()
  const ts: Record<string, any> = t('GALLERY', { returnObjects: true })
  return <div className='web-gallery'>
    <div className='web-gallery-cont'>
      <h1 className='title'>A world class fighting competition KOF<br /> in FEOVERSE is approaching</h1>
      <ul className='tips'>
        {
          ts.GALLERY_TOP_LIST.map((item: any) => {
          return <li key={item.title} style={{
            backgroundImage: `url(assets/${item.icon}.png)`
          }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </li>
          })
        }
      </ul>
      <ul className='card'>
        {
          ts.GALLERY_BOTTOM_LIST.map((item: any) => {
          return <li key={item.title} style={{
            backgroundImage: `url(assets/${item.icon}.png)`
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
