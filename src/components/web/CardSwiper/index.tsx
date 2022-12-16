import React from 'react'
import { SWIPER_LIST } from '@/config'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'

const Index = () => {
  // SwiperCore.use([Pagination])
  const list = [
    'Mai Shiranui, a classic character image of SNK, is a deeply rooted female ninja-playing opponent with gorgeous movements, coquettish costumes and an iconic fan in the palm of her hand.',
    'When the fighting kicks off, this glamorous female fighter is the first to fight. To fully awaken the potential hidden in her body, Mai Shiranui will transform into 7777 Avatars to enter different parallel time and space. The fighters start to see the ultimate upgrading path to the king of fighting.',
    'In Fighter Era Odyssey, each Mai Shiranui NFT is a unique, collectible NFT stored on the Ethereum blockchain.'
  ]
  const btnsList = [
    'Unique Collectibles',
    'NFT Marketplace',
    'Imersive FEOVERSE',
    'Fighting Battle'
  ]
  return <div className='web-home-card-swiper'>
    <h1 className='title'>The first fighter<br /> to appear on the stage</h1>
    {
      list.map(item => <p key={item}>{item}</p>)
    }
    <div className='web-home-card-swiper-wrap'>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={0}
        centeredSlides={true}
        initialSlide={3}
        slidesPerView={'auto'}
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
