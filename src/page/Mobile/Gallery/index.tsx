import React from 'react'
import { GALLERY_TOP_LIST, GALLERY_BOTTOM_LIST } from '@/config'
import Footer from '@/components/mobile/Footer'

const Index = () => {
  return <div className='m-gallery'>
    <div className='m-gallery-cont'>
      <h1 className='title'>A world class<br /> fighting competition <br />KOF in FEOVERSE is<br /> aproaching</h1>
      <ul className='tips'>
        {
          GALLERY_TOP_LIST.map(item => {
          return <li key={item.title}>
            <div style={{
            backgroundImage: `url(../assets/m/${item.icon}.png)`
          }}><h2>{item.title}</h2></div>
            <p>{item.desc}</p>
          </li>
          })
        }
      </ul>
      <ul className='card'>
        {
          GALLERY_BOTTOM_LIST.map(item => {
          return <li key={item.title} style={{
            backgroundImage: `url(../assets/m/${item.icon}.png)`
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
