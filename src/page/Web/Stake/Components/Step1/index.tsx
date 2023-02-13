import React, { useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'react-i18next'
import ContainerBg from '@/components/common/ContainerBg'
import Button from '@/components/common/Button'
import Tips from '@/components/common/Tips'

const Index = () => {
  const { t } = useTranslation()
  const ts: Record<string, any> = t('STAKE.STEP1', { returnObjects: true })
  const { account } = useWeb3React()
  const [show, setShow] = useState<boolean>(false)
  return <div className='web-stake-step1'>
    <h1 className='web-stake-step1-title' dangerouslySetInnerHTML={{ __html: ts.title }}/>
    <ContainerBg className='web-stake-step1-cont'>
      {
        !account && <Button size='large' onClick={() => setShow(true)}>{ts.connect}</Button>
      }
      {
        account && <div className='info'>
          <p>{ts.SUCCESS}</p>
          <p>{account.slice(0, 4)}...{account.slice(-6)}</p>
        </div>
      }
    </ContainerBg>
    <Tips type='error' tip='Please connect the wallet first!' show={show} onClose={() => setShow(false)}/>
  </div>
}

export default Index
