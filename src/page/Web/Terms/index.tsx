import React from 'react'
import { TermsList } from '@/config'
import Footer from '@/components/web/Footer'

const Index = () => {
  return <div className='web-terms'>
    <div className='web-terms-cont'>
      <h1 className='title'>{TermsList.title}</h1>
      {
        TermsList.item.map(item => <div className='cont'>
          <h2>{item.title}</h2>
          {
            item.cont.map(item1 => <p key={item1}>{item1}</p>)
          }
        </div>)
      }
    </div>
    <Footer />
  </div>
}

export default Index
