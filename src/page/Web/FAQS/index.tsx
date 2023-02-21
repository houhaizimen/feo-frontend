import React from 'react'
import { useTranslation } from 'react-i18next'
import Footer from '@/components/web/Footer'

const Index = () => {
  const { t } = useTranslation()
  const ts: Record<string, any> = t('FAQ', { returnObjects: true })
  return <div className='web-faq'>
    <div className='web-faq-cont'>
    <h1 className='title'>{ts.title}</h1>
      <div className='list'>
        <i className='angle'/>
        <i className='angle'/>
        <i className='angle'/>
        <i className='angle'/>
        {
          ts.item.map((item: any) => {
            return <dl key={item.title}>
              <dt>{item.title}</dt>
              <dd>
                {
                  item.cont.map((items: string) => <p key={items} dangerouslySetInnerHTML={{ __html: items }}/>)
                }
              </dd>
            </dl>
          })
        }
      </div>
    </div>
    <Footer />
  </div>
}

export default Index
