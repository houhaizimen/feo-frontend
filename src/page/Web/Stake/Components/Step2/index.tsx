import React from 'react'
import { useWeb3React } from '@web3-react/core'
import ContainerBg from '@/components/common/ContainerBg'

const Index = () => {
  const { account } = useWeb3React()
  return <>
    {
      !account && <div className='web-stake-step1 web-stake-step2'>
        <h1 className='web-stake-step1-title'>STEP<span>2</span>SELECT NFT TO BE STAKED</h1>
        <ContainerBg className='web-stake-step2-cont'>
          <div className='web-stake-step2-cont-item'>
            <h1>YOUR COLLECTION</h1>
          </div>
        </ContainerBg>
      </div>
    }
  </>
}

export default Index
