import React from 'react'
import { useWeb3React } from '@web3-react/core'
import ContainerBg from '@/components/common/ContainerBg'
import Button from '@/components/common/Button'

const Index = () => {
  const { account } = useWeb3React()
  return <div className='web-stake-step1'>
    <h1 className='web-stake-step1-title'>STEP<span>1</span>CONNECT WALLET</h1>
    <ContainerBg className='web-stake-step1-cont'>
      {
        account && <Button size='large'>Connect Wallet</Button>
      }
      {
        account && <div className='info'>
          <p>SUCCESSFULLY CONNECTED TO WALLET</p>
          <p>{account.slice(0, 4)}...{account.slice(-6)}</p>
        </div>
      }
    </ContainerBg>
  </div>
}

export default Index
