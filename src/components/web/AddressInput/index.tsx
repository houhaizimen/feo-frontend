import React, { useState } from 'react'
import classnames from 'classnames'
import { isMobile } from '@/utils/tools'
import { whiteList } from '@/config/whiteList'
import { useTranslation } from 'react-i18next'

import Tips from '@/components/common/Tips'

const Index = () => {
  const { t } = useTranslation()
  const ts: Record<string, any> = t('TIPS', { returnObjects: true })
  const [address, setAddress] = useState<string>('')
  const [show, setShow] = useState<boolean>(false)
  const [tips, setTips] = useState<string>('')
  const handleChange = (e: any) => {
    setAddress(e.target.value)
  }
  const handleClick = () => {
    if (address) {
      const bol = whiteList.includes(address)
      if (bol) setTips(`${ts.SUCCESS.search_input}`)
      else setTips(`${ts.ERROR.search_input}`)
      setShow(true)
    }
  }
  return <div className={classnames('web-home-address-input', { mobile: isMobile() })}>
    <input onChange={handleChange}
    placeholder={ts.input}
    type="text" />
    <i onClick={handleClick}/>
    <Tips tip={tips} show={show} onClose={() => setShow(false)}/>
  </div>
}

export default Index
