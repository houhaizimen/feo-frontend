import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import Footer from '@/components/web/Footer'

const Index = () => {
  const { t } = useTranslation()
  const ts: Record<string, any> = t('GALLERY', { returnObjects: true })
  const navigate = useNavigate()
  const handleJump = (link: string) => {
    if (!link) return
    navigate(link)
    window.scrollTo(0, 0)
  }
  return <div className='web-gallery'>
    <div className='web-gallery-cont'>
      <h1 className='title' dangerouslySetInnerHTML={{ __html: t('GALLERY.title', { symbol: '<br />' }) }} />
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
          return <li key={item.title} onClick={() => handleJump(item.link)} style={{
            backgroundImage: `url(assets/${item.icon}.png)`
          }}>
            <div className='card-text'>
              <h1>{item.title}</h1>
            </div>
          </li>
          })
        }
      </ul>
    </div>
    <Footer />
  </div>
}

export default Index
