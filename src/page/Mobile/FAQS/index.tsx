import React from 'react'
import { FAQList } from '@/config'
import Footer from '@/components/mobile/Footer'

const Index = () => {
  return <div className='m-faq'>
    <div className='m-faq-cont padding-26'>
      <h1 className='title'>{FAQList.title}</h1>
      <div className='list'>
        {
          FAQList.item.map(item => {
            return <dl key={item.title}>
              <dt>{item.title}</dt>
              <dd>
                {
                  item.cont.map(items => <p key={items}>{items}</p>)
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
