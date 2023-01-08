import React, { useCallback, useState } from 'react'
import { useBalance } from '@/hooks/useBlance'
import { useWeb3React } from '@web3-react/core'
import { PRICE } from '@/config/index'
// import { getMerkleTree } from '@/utils/merkletree'
import Runners from '@/class/Runners'
import { useMintData } from '@/hooks/useMintData'

import Button from '@/components/common/Button'
import Stepper from '@/components/common/Stepper'
import Tips from '@/components/common/Tips'
import AddressInput from '@/components/web/AddressInput'

const Index = () => {
  // getMerkleTree('0xe0e8595563463a90E07aa524AABb323cC63aa76F')
  const { account, library } = useWeb3React()
  const balance = useBalance(account ?? '')
  const [quantity, setQuantity] = useState<number>(1)
  const [loading, setLoading] = useState<boolean>(false)
  const [show, setShow] = useState<boolean>(false)
  const [tips, setTips] = useState<string>('')
  const { publicMint, whitelistMint } = Runners
  const { max, handleGetStartTime, disabled, handleBalanceOf } = useMintData(account ?? '', balance)
  const handleMint = useCallback(async () => {
    setLoading(true)
    const { wTime, pTime } = await handleGetStartTime()
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
        await handleBalanceOf(account as string)
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
  }, [handleGetStartTime, account, balance, library, publicMint, quantity, whitelistMint, handleBalanceOf])
  return <div className='web-home-banner'>
      <div className='cont'>
        <h2>START YOUR JOURNEY IN</h2>
        <div className='line' />
        <h1>FIGHTER ERA ODYSSEY</h1>
        <div className='web-home-banner-buy'>
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
          <p>Whitelists can mint 8h in advance</p>
          <AddressInput />
          <div className='web-home-banner-buy-step'>
            <Stepper value={quantity} max={max} min={1} onChange={val => setQuantity(val)}/>
            <Button loading={loading} disabled={disabled} onClick={handleMint}>MINT</Button>
          </div>
        </div>
      </div>
      <img src="assets/banner-person.png" alt="" className='person'/>
    <Tips tip={tips} show={show} onClose={() => setShow(false)}/>
  </div>
}

export default Index
