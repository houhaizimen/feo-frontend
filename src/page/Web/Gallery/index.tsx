import React from 'react'
import { GALLERY_TOP_LIST, GALLERY_BOTTOM_LIST } from '@/config'
import Footer from '@/components/web/Footer'

const Index = () => {
  return <div className='web-gallery'>
    <div className='web-gallery-cont'>
      <h1 className='title'>A world class fighting competition KOF<br /> in FEOVERSE is aproaching</h1>
      <ul className='tips'>
        {
          GALLERY_TOP_LIST.map(item => {
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
          GALLERY_BOTTOM_LIST.map(item => {
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
