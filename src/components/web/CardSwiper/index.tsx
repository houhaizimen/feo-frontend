import React from 'react'
import { SWIPER_LIST, SWIPER_TEXT_LIST } from '@/config'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'

const Index = () => {
  // SwiperCore.use([Pagination])
  const btnsList = [
    'Unique Collectibles',
    'NFT Marketplace',
    'Immersive FEOVERSE',
    'Fighting Battle'
  ]
  return <div className='web-home-card-swiper'>
    <h1 className='title'>The first fighter<br /> to appear on the stage</h1>
    {
      SWIPER_TEXT_LIST.map(item => <p key={item}>{item}</p>)
    }
    <div className='web-home-card-swiper-wrap'>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={0}
        centeredSlides={true}
        initialSlide={3}
        slidesPerView={'auto'}
        loop
        // centeredSlides={true}
        className="mySwiper web-home-card-swiper-wrap-swiper">
        {
          SWIPER_LIST.map((item, index: number) => {
            return (
              <SwiperSlide key={index}>
                <img src={`assets/card/${item.icon}.png`} alt="" />
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
    <ul className='btn-wrap'>
      {
        btnsList.map(item => <li key={item}>{item}</li>)
      }
    </ul>
  </div>
}

export default Index
