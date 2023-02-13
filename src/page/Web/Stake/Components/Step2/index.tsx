import React, { useState, useMemo, useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'react-i18next'
import classNames from 'classnames'

import ContainerBg from '@/components/common/ContainerBg'
import Button from '@/components/common/Button'

const Index = () => {
  const { t } = useTranslation()
  const ts: Record<string, any> = t('STAKE.STEP2', { returnObjects: true })
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
    <h1>{ts.Mai}</h1>
    <dl>
      <dd>{ts.stakeDesc1}</dd>
      <dt>{ts.total} 0</dt>
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
        <p>{t('STAKE.STEP2.expected1', { type: '1/3/5/10' })}</p>
        {/* <p>You can stake 1/3/5/10 Mai Shiranui NFT(s) at a time.</p> */}
      </>
      : <p className='empty'>{ts.empty}</p>
    }
  </div>
  }, [MaiCheckList, handleMAICheck, t, ts.Mai, ts.stakeDesc1, ts.total, ts.empty])
  const CANDY_DOM = useMemo(() => {
    return <div className='web-stake-step2-cont-item'>
    <h1>{ts.Kachousen}</h1>
    <dl>
      <dd>{ts.stakeDesc2}</dd>
      <dt>{ts.total}: 0</dt>
    </dl>
    <div className='card-list'>
      {
        '123456789'.split('').map(item => <div onClick={() => handleCANDYCheck(item)} className={classNames('card', { checked: CandyCheckList.includes(item) })} key={item}>
          <img src={`assets/card/${item}.png`} alt="" />
        </div>)
      }
    </div>
    <p>{t('STAKE.STEP2.expected2', { candies: 'xxx', type: '#4 & #5' })}</p>
    <Button className='web-stake-step2-cont-stake' size='large'>Stake</Button>
  </div>
  }, [CandyCheckList, handleCANDYCheck, t, ts.stakeDesc2, ts.total, ts.Kachousen])
  return <>
    {
       account && <div className='web-stake-step1 web-stake-step2'>
        <h1 className='web-stake-step1-title' dangerouslySetInnerHTML={{ __html: ts.title }}/>
        <ContainerBg className='web-stake-step2-cont'>
          {MAI_DOM}
          {MaiCheckList.length > 0 && CANDY_DOM}
        </ContainerBg>
      </div>
    }
  </>
}

export default Index
