import React, { useEffect, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { getUserBagIndex, getUserDraw } from '@/api'
import { useWeb3React } from '@web3-react/core'

import Footer from '@/components/web/Footer'
import ContainerBg from '@/components/common/ContainerBg'
import Button from '@/components/common/Button'
import Tips from '@/components/common/Tips'
import BuySuccessModal from './Components/BuySuccess'

const Index = () => {
  const { account } = useWeb3React()
  const { t } = useTranslation()
  const [showTips, setShowTips] = useState<boolean>(false)
  const [tips, setTips] = useState<string>('')
  const [Profile, setProfile] = useState<any>()
  const [data, setData] = useState<any>()
  const [types, setTypes] = useState<'success' | 'error'>('success')
  const ts: Record<string, any> = t('REPOCH', { returnObjects: true })
  const [show, setShow] = useState<Boolean>(false)
  const handleOpen = async () => {
    if (Profile?.candyBalance < 10) {
      setTypes('error')
      setTips(t('TIPS.ERROR.candies') as string)
      setShowTips(true)
      return ''
    } else {
      const res = await getUserDraw()
      if (res.code === '0') {
        console.log(res)
        setData(res?.data ?? {})
        setShow(true)
        await getProfile()
      }
    }
  }
  const getProfile = useCallback(async () => {
    const res = await getUserBagIndex()
    setProfile(res?.data ?? {})
  }, [])
  useEffect(() => {
    if (account) void getProfile()
  }, [account, getProfile])
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
          <Button onClick={handleOpen}>{ts.open}</Button>
        </div>
        <div className='right'>
          {/* <h2>Spend <span>10</span> candies to <br />get a capsule</h2> */}
          <h2 dangerouslySetInnerHTML={{ __html: t('REPOCH.spend', { count: 10 }) }}/>
          <p>{ts.tip}</p>
          <div className='detail'>
            {
              ts.REPOCH_LIST.map((item: any, index: number) => <ul key={index}>
                {
                  item.map((item1: string) => <li key={item1} dangerouslySetInnerHTML={{ __html: item1 }}/>)
                }
              </ul>)
            }
          </div>
        </div>
      </ContainerBg>
    </div>
    <Footer />
    <Tips tip={tips} show={showTips} type={types} onClose={() => setShowTips(false)}/>
    <BuySuccessModal data={data} show={show} onClose={() => setShow(false)}/>
  </div>
}

export default Index
