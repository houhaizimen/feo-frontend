import React from 'react'
import { TermsList } from '@/config'
import Footer from '@/components/web/Footer'

const Index = () => {
  return <div className='web-terms'>
    <div className='web-terms-cont'>
      <h1 className='title'>{TermsList.title}</h1>
      {
        TermsList.item.map(item => <p key={item}>{item}</p>)
      }
    </div>
    <Footer />
  </div>
}

export default Index
