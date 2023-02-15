import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import Footer from '@/components/web/Footer'
import ContainerBg from '@/components/common/ContainerBg'
import Button from '@/components/common/Button'
import BuySuccessModal from './Components/BuySuccess'

const Index = () => {
  const { t } = useTranslation()
  const ts: Record<string, any> = t('REPOCH', { returnObjects: true })
  const [show, setShow] = useState<Boolean>(false)
  return <div className='web-repoch'>
    <div className='web-repoch-cont'>
      <h1 className='title'>{ts.title}</h1>
      <p>{ts.desc}</p>
      <div className='web-repoch-cont-candy'>
        <img src="assets/stake/icon-candy.png" alt="" />
        <span>{ts.count} 0</span>
      </div>
      <ContainerBg className='web-repoch-cont-rule'>
        <div className='left'>
          <img src="assets/stake/egg-machine.png" alt="" />
          <Button>{ts.open}</Button>
        </div>
        <div className='right'>
          {/* <h2>Spend <span>10</span> candies to <br />get a capsule</h2> */}
          <h2 dangerouslySetInnerHTML={{ __html: t('REPOCH.spend', { count: 10 }) }}/>
          <p>{ts.tip}</p>
          <div className='detail'>
            {
              ts.REPOCH_LIST.map((item: any) => <ul key={item[0]}>
                {
                  item.map((item1: string) => <li dangerouslySetInnerHTML={{ __html: item1 }}/>)
                }
              </ul>)
            }
          </div>
        </div>
      </ContainerBg>
    </div>
    <Footer />
    <BuySuccessModal show={show} onClose={() => setShow(false)}/>
  </div>
}

export default Index
