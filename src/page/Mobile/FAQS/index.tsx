import React from 'react'
import { useTranslation } from 'react-i18next'
import Footer from '@/components/mobile/Footer'

const Index = () => {
  const { t } = useTranslation()
  const ts: Record<string, any> = t('FAQ', { returnObjects: true })
  return <div className='m-faq'>
    <div className='m-faq-cont padding-26'>
      <h1 className='title'>{ts.title}</h1>
      <div className='list'>
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
