import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useBalance } from '@/hooks/useBlance'
import { useWeb3React } from '@web3-react/core'
import { PRICE } from '@/config/index'
import Runners from '@/class/Runners'
import { getMerkleTree } from '@/utils/merkletree'

import Button from '@/components/common/Button'
import Stepper from '@/components/common/Stepper'
import Tips from '@/components/common/Tips'

const Index = () => {
  const { account, library } = useWeb3React()
  getMerkleTree(account ?? '')
  const balance = useBalance(account ?? '')
  const [quantity, setQuantity] = useState<number>(1)
  const [loading, setLoading] = useState<boolean>(false)
  const [show, setShow] = useState<boolean>(false)
  const [tips, setTips] = useState<string>('')
  const [count, setCount] = useState<number>(0)
  const { getBlanceOf, getwlMintStartTime, getwlMintEndTime, getpMintStartTime, publicMint, whitelistMint } = Runners
  const [isWhiteTime, setIsWhiteTime] = useState<boolean>(false)
  const [isPTime, setIsPTime] = useState<boolean>(false)
  const handleGetStartTime = useCallback(async () => {
    const wStart = await getwlMintStartTime()
    const wEnd = await getwlMintEndTime()
    const pStart = await getpMintStartTime()
    const now = new Date().getTime()
    const bol = now >= wStart * 1000 && now <= wEnd * 1000
    setIsWhiteTime(bol)
    setIsPTime(now > pStart)
    return {
      wTime: bol,
      pTime: now > pStart
    }
  }, [getwlMintStartTime, getwlMintEndTime, getpMintStartTime])

  const handleBalanceOf = useCallback(async (account: string) => {
    const res = await getBlanceOf(account)
    setCount(res)
  }, [getBlanceOf])

  useEffect(() => {
    void handleGetStartTime()
  }, [handleGetStartTime])

  useEffect(() => {
    if (account) void handleBalanceOf(account)
  }, [handleBalanceOf, account])

  const handleMint = useCallback(async () => {
    setLoading(true)
    const { wTime, pTime } = await handleGetStartTime()
    console.log(wTime, pTime)
    const price = PRICE[pTime ? 'P' : 'W']
    if (Number(balance) < price) {
      setShow(true)
      setTips('Insufficient balance')
      setLoading(false)
      return
    }
    if (wTime) {
      const res = await whitelistMint(quantity, (account as string), library)
      setLoading(false)
      if (res === 1) {
        setShow(true)
        setTips(`Congratulations! You successfully mint ${quantity} NFT!`)
      } else {
        setShow(true)
        setTips('Sorry, something went wrong. Please try again later.')
      }
      return
    }
    if (pTime) {
      const res = await publicMint(quantity, (account as string), library)
      setLoading(false)
      if (res) {
        setShow(true)
        setTips(`Congratulations! You successfully mint ${quantity} NFT!`)
      } else {
        setShow(true)
        setTips('Sorry, something went wrong. Please try again later.')
      }
    }
  }, [handleGetStartTime, account, balance, library, publicMint, quantity, whitelistMint])
  const max = useMemo(() => {
    if (isWhiteTime) {
      return count ? 3 - count : 3
    }
    return 100
  }, [isWhiteTime, count])
  const disabled = useMemo(() => {
    if (isWhiteTime && max === 0) return false
    return (!isWhiteTime && !isPTime) || !account || !balance
  }, [isWhiteTime, isPTime, account, balance, max])
  console.log(disabled)
  return <div className='web-home-banner'>
      <div className='cont'>
        <h2>START YOUR JOURNEY IN</h2>
        <div className='line' />
        <h1>FIGHTER ERA ODYSSEY</h1>
        <div className='web-home-banner-buy'>
          <dl className='item'>
          {/* Public Sale Whitelist Total Time */}
            <dd>Public Sale</dd>
            {/* <dt>2022.12.28 pm9:00 - 12.29 pm9:00</dt> */}
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
          <p>Whitelists can mint 8h in advance</p>
          <div className='web-home-banner-buy-step'>
            <Stepper value={quantity} max={max} min={1} onChange={val => setQuantity(val)}/>
          </div>
          {/* <Button loading={loading} disabled={disabled} onClick={handleMint}>MINT</Button> */}
          <Button loading={loading} disabled={true} onClick={handleMint}>MINT</Button>
        </div>
      </div>
      <img src="assets/banner-person.png" alt="" className='person'/>
    <Tips tip={tips} show={show} onClose={() => setShow(false)}/>
  </div>
}

export default Index
