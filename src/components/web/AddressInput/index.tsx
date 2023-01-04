import React, { useState } from 'react'
import classnames from 'classnames'
import { isMobile } from '@/utils/tools'
import { whilteList } from '@/config/whiteList'

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
      const bol = whilteList.includes(address)
      if (bol) setTips('The address is in the white list')
      else setTips('Sorry, The address is not in the white list')
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
