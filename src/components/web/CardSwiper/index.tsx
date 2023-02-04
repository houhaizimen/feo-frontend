import React from 'react'
import { SWIPER_LIST } from '@/config'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useTranslation } from 'react-i18next'
import 'swiper/css'
import 'swiper/css/navigation'

const Index = () => {
  const { t } = useTranslation()
  const SWIPER_TEXT_LIST: string[] = t('CARDSWIPER.SWIPER_TEXT_LIST', { returnObjects: true })
  const btnsList: string[] = t('CARDSWIPER.btnsList', { returnObjects: true })
  return <div className='web-home-card-swiper'>
    <h1 className='title' dangerouslySetInnerHTML={{ __html: t('CARDSWIPER.title') }}/>
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
