import React from 'react'
import { useWeb3React } from '@web3-react/core'
import ContainerBg from '@/components/common/ContainerBg'
import Button from '@/components/common/Button'

const Index = () => {
  const { account } = useWeb3React()
  return <div className='web-stake-step1'>
    <h1 className='web-stake-step1-title'>STEP<span>2</span>SELECT NFT TO BE STAKED</h1>
    <ContainerBg className='web-stake-step1-cont'>
    </ContainerBg>
  </div>
}

export default Index
