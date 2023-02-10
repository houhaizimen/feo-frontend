import React, { useState, useMemo, useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import classNames from 'classnames'

import ContainerBg from '@/components/common/ContainerBg'

const Index = () => {
  const [MaiCheckList, setMaiCheckList] = useState<string[]>([])
  const [CandyCheckList, setCandyCheckList] = useState<string[]>([])
  const { account } = useWeb3React()
  const handleMAICheck = useCallback((id: string) => {
    const index = MaiCheckList.findIndex(item => id === item)
    const list = [...MaiCheckList]
    if (index > -1) list.splice(index, 1)
    else list.splice(MaiCheckList.length, 0, id)
    setMaiCheckList(list)
  }, [MaiCheckList])
  const handleCANDYCheck = useCallback((id: string) => {
    const index = CandyCheckList.findIndex(item => id === item)
    const list = [...CandyCheckList]
    if (index > -1) list.splice(index, 1)
    else list.splice(CandyCheckList.length, 0, id)
    setCandyCheckList(list)
  }, [CandyCheckList])
  const MAI_DOM = useMemo(() => {
    return <div className='web-stake-step2-cont-item'>
    <h1>Mai Shiranui NFT</h1>
    <dl>
      <dd>Please select the following NFTs to be staked:</dd>
      <dt>Total amount: 4</dt>
    </dl>
    {
      MaiCheckList.length > 0
      ? <>
        <div className='card-list'>
          {
            '123456789'.split('').map(item => <div onClick={() => handleMAICheck(item)} className={classNames('card', { checked: MaiCheckList.includes(item) })} key={item}>
              <img src={`assets/card/${item}.png`} alt="" />
            </div>)
          }
        </div>
        <p>Expected reward: xx candies and fragment #4 & #5</p>
      </>
      : <p className='empty'>Currently, your wallet does not show any Mai Shiranui NFT for staking</p>
    }
  </div>
  }, [MaiCheckList, handleMAICheck])
  const CANDY_DOM = useMemo(() => {
    return <div className='web-stake-step2-cont-item'>
    <h1>Mai Shiranui NFT</h1>
    <dl>
      <dd>Stake Kachousen NFT as accelerator. Each address can only stake up to 3 ones</dd>
      <dt>Total amount: 4</dt>
    </dl>
    <div className='card-list'>
      {
        '123456789'.split('').map(item => <div onClick={() => handleCANDYCheck(item)} className={classNames('card', { checked: CandyCheckList.includes(item) })} key={item}>
          <img src={`assets/card/${item}.png`} alt="" />
        </div>)
      }
    </div>
    <p>Expected reward: xx candies and fragment #4 & #5</p>
  </div>
  }, [CandyCheckList, handleCANDYCheck])
  return <>
    {
      !account && <div className='web-stake-step1 web-stake-step2'>
        <h1 className='web-stake-step1-title'>STEP<span>2</span>SELECT NFT TO BE STAKED</h1>
        <ContainerBg className='web-stake-step2-cont'>
          {MAI_DOM}
          {MaiCheckList.length > 0 && CANDY_DOM}
        </ContainerBg>
      </div>
    }
  </>
}

export default Index
