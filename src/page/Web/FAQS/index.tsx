import React from 'react'
import { FAQList } from '@/config'
import Footer from '@/components/web/Footer'

const Index = () => {
  return <div className='web-faq'>
    <div className='web-faq-cont'>
      <h1 className='title'>{FAQList.title}</h1>
      <div className='list'>
        <i className='angle'/>
        <i className='angle'/>
        <i className='angle'/>
        <i className='angle'/>
        {
          FAQList.item.map((item, index) => {
            return <dl key={item.title}>
              <dt>{index + 1}.{item.title}</dt>
              <dd>
                {
                  item.cont.map(items => <p key={items} dangerouslySetInnerHTML={{__html: items}}/>)
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
