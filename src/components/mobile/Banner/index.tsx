import React, { useCallback, useState } from 'react'
import { useBalance } from '@/hooks/useBlance'
import { useWeb3React } from '@web3-react/core'
import { PRICE } from '@/config/index'
import Runners from '@/class/Runners'
import { useMintData } from '@/hooks/useMintData'

import Button from '@/components/common/Button'
import Stepper from '@/components/common/Stepper'
import Tips from '@/components/common/Tips'
import AddressInput from '@/components/web/AddressInput'

const Index = () => {
  const { account, library } = useWeb3React()
  const balance = useBalance(account ?? '')
  const [quantity, setQuantity] = useState<number>(1)
  const [loading, setLoading] = useState<boolean>(false)
  const [types, setTypes] = useState<'success' | 'error'>('success')
  const [show, setShow] = useState<boolean>(false)
  const [tips, setTips] = useState<string>('')
  const { publicMint, whitelistMint } = Runners
  const { max, handleGetStartTime, disabled, handleBalanceOf, maxCount } = useMintData(account ?? '', balance)
  const handleMint = useCallback(async () => {
    setLoading(true)
    const { wTime, pTime } = await handleGetStartTime()
    const price = PRICE[pTime ? 'P' : 'W']
    if (Number(balance) < price) {
      setTypes('error')
      setShow(true)
      setTips('Insufficient balance')
      setLoading(false)
      return
    }
    if (max === 0) {
      setTypes('error')
      setShow(true)
      setTips(`Each whitelist can have at most ${maxCount} NFTs`)
      setLoading(false)
      return
    }
    if (wTime) {
      const res = await whitelistMint(quantity, (account as string), library)
      setLoading(false)
      if (res === 1) {
        setTypes('success')
        setShow(true)
        setTips(`Congratulations! You successfully mint ${quantity} NFT!`)
        await handleBalanceOf(account as string)
      } else {
        setTypes('error')
        setShow(true)
        setTips('Sorry, something went wrong. Please try again later.')
      }
      return
    }
    if (pTime) {
      const res = await publicMint(quantity, (account as string), library)
      setLoading(false)
      if (res) {
        setTypes('success')
        setShow(true)
        setTips(`Congratulations! You successfully mint ${quantity} NFT!`)
      } else {
        setTypes('error')
        setShow(true)
        setTips('Sorry, something went wrong. Please try again later.')
      }
    }
  }, [handleGetStartTime, maxCount, max, account, balance, library, publicMint, quantity, whitelistMint, handleBalanceOf])
  return <div className='m-home-banner padding-26'>
      <div className='cont'>
        <h2>START YOUR JOURNEY IN</h2>
        <div className='line' />
        <h1>FIGHTER ERA ODYSSEY</h1>
        <div className='m-home-banner-buy'>
          <dl className='item'>
            <dd>Public Sale</dd>
            <dt>{PRICE.P} ETH</dt>
          </dl>
          <dl className='item'>
            <dd>Whitelist</dd>
            <dt>{PRICE.W} ETH</dt>
          </dl>
          <dl className='item'>
            <dd>Total</dd>
            <dt>7777</dt>
          </dl>
          <p>Each whitelist can mint up to 2 NFTs</p>
          <AddressInput />
          <div className='m-home-banner-buy-step'>
            <Stepper value={quantity} max={max} min={1} onChange={val => setQuantity(val)}/>
            <Button loading={loading} disabled={disabled} onClick={handleMint}>MINT</Button>
          </div>
        </div>
      </div>
      <img src="../assets/banner-person.png" alt="" className='person'/>
      <Tips tip={tips} show={show} type={types} onClose={() => setShow(false)}/>
  </div>
}

export default Index
