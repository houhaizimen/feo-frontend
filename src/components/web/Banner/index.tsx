// import React, { useCallback, useState } from 'react'
import React from 'react'
// import { useBalance } from '@/hooks/useBlance'
// import { useWeb3React } from '@web3-react/core'
// import Runners from '@/class/Runners'
// import { useMintData } from '@/hooks/useMintData'
import { useTranslation } from 'react-i18next'

// import Button from '@/components/common/Button'
// import Stepper from '@/components/common/Stepper'
// import Tips from '@/components/common/Tips'
// import AddressInput from '@/components/web/AddressInput'

const Index = () => {
  const { t } = useTranslation()
  const ts: Record<string, any> = t('BANNER', { returnObjects: true })
  // const TS_TIPS: Record<string, any> = t('TIPS', { returnObjects: true })
  // const { account, library } = useWeb3React()
  // const balance = useBalance(account ?? '')
  // const [quantity, setQuantity] = useState<number>(1)
  // const [loading, setLoading] = useState<boolean>(false)
  // const [show, setShow] = useState<boolean>(false)
  // const [types, setTypes] = useState<'success' | 'error'>('success')
  // const [tips, setTips] = useState<string>('')
  // const { publicMint, whitelistMint } = Runners
  // const { max, handleGetStartTime, maxCount, disabled } = useMintData(account ?? '', balance)
  // const { handleGetStartTime, pPrice, wPrice, disabled } = useMintData(account ?? '', balance)
  // const handleMint = useCallback(async () => {
  //   setLoading(true)
  //   const { wTime, pTime } = await handleGetStartTime()
  //   const price = pTime ? pPrice : wPrice
  //   if (Number(balance) < price) {
  //     setTypes('error')
  //     setShow(true)
  //     setTips(`${TS_TIPS.ERROR.balance}`)
  //     setLoading(false)
  //     return
  //   }
  //   if (wTime) {
  //     const res = await whitelistMint(quantity, (account as string), library)
  //     setLoading(false)
  //     if (res === 1) {
  //       setTypes('success')
  //       setShow(true)
  //       setQuantity(1)
  //       setTips(`${t('TIPS.SUCCESS.mint', { quantity })}`)
  //     } else {
  //       setTypes('error')
  //       setShow(true)
  //       setTips(`${TS_TIPS.ERROR.mint}`)
  //     }
  //     return
  //   }
  //   if (pTime) {
  //     const res = await publicMint(quantity, (account as string), library)
  //     setLoading(false)
  //     if (res) {
  //       setTypes('success')
  //       setShow(true)
  //       setQuantity(1)
  //       setTips(`${t('TIPS.SUCCESS.mint', { quantity })}`)
  //     } else {
  //       setTypes('error')
  //       setShow(true)
  //       setTips(`${TS_TIPS.ERROR.mint}`)
  //     }
  //   }
  // }, [pPrice, wPrice, handleGetStartTime, account, balance, library, publicMint, quantity, whitelistMint, TS_TIPS, t])
  return <div className='web-home-banner'>
      <div className='cont'>
        <h2>{ts.title}</h2>
        <div className='line' />
        <h1>{ts.sub_title}</h1>
        {/* <div className='web-home-banner-buy'>
          <dl className='item'>
            <dd>{ts.Fighter}</dd>
            <dt>{ts.Mai}</dt>
          </dl>
          <dl className='item'>
            <dd>{ts.sale}</dd> */}
            {/* <dt>{pPrice} ETH</dt> */}
            {/* <dt>0.05 ETH</dt>
          </dl> */}
          {/* <dl className='item'>
            <dd>{ts.Total}</dd>
            <dt>{totalSupply ?? ''}/{maxSupply ?? ''}</dt>
          </dl> */}
          {/* <p>{ts.tips}</p> */}
          {/* <AddressInput /> */}
          {/* <Stepper value={quantity} max={100} min={1} onChange={val => setQuantity(val)}/>
          <Button loading={loading} disabled={disabled} onClick={handleMint}>{ts.MINT}</Button> */}
        {/* </div> */}
      </div>
      <img src="assets/banner-person.png" alt="" className='person'/>
    {/* <Tips tip={tips} show={show} type={types} onClose={() => setShow(false)}/> */}
  </div>
}

export default Index
