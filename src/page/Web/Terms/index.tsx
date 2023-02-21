import React from 'react'
import { useTranslation } from 'react-i18next'
import Footer from '@/components/web/Footer'

const Index = () => {
  const { t } = useTranslation()
  const ts: Record<string, any> = t('TERMS', { returnObjects: true })
  return <div className='web-terms'>
    <div className='web-terms-cont'>
      <h1 className='title'>{ts.title}</h1>
      {
        ts.item.map((item: any, index: number) => <div key={index} className='cont'>
          <h2>{item.title}</h2>
          {
            item.cont.map((item1: string, index: number) => <p key={index}>{item1}</p>)
          }
        </div>)
      }
    </div>
    <Footer />
  </div>
}

export default Index
