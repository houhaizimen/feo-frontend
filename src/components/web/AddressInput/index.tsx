import React, { useState } from 'react'
import classnames from 'classnames'
import { isMobile } from '@/utils/tools'
import { whiteList } from '@/config/whiteList'

import Tips from '@/components/common/Tips'

const Index = () => {
  const [address, setAddress] = useState<string>('')
  const [show, setShow] = useState<boolean>(false)
  const [tips, setTips] = useState<string>('')
  const handleChange = (e: any) => {
    setAddress(e.target.value)
  }
  const handleClick = () => {
    if (address) {
      const bol = whiteList.includes(address)
      if (bol) setTips('Congratulations! Your address is on the whitelist.')
      else setTips('Sorry, The address is not in the whitelist.')
      setShow(true)
    }
  }
  return <div className={classnames('web-home-address-input', { mobile: isMobile() })}>
    <input onChange={handleChange}
    placeholder='Verify your whitelists address'
    type="text" />
    <i onClick={handleClick}/>
    <Tips tip={tips} show={show} onClose={() => setShow(false)}/>
  </div>
}

export default Index
