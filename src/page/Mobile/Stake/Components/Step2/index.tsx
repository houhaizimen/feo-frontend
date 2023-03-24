import React, { useState, useMemo, useCallback, useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'react-i18next'
import classNames from 'classnames'
import Runners from '@/class/Runners'
import Kachousen from '@/class/kachousen'
import Stake from '@/class/Stake'
import { PLEDGE_TOTAL } from '@/config'
import useNFTS from '@/hooks/useNFT'
import { useAppDispatch } from '@/store'
import { setShareMsg } from '@/store/share'

import ContainerBg from '@/components/common/ContainerBg'
import Button from '@/components/common/Button'
import Tips from '@/components/common/Tips'

const Index = () => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const TS_TIPS: Record<string, any> = t('TIPS', { returnObjects: true })
  const ts: Record<string, any> = t('STAKE.STEP2', { returnObjects: true })
  const { getBalanceOf } = Runners
  const { getKachousenBalanceOf } = Kachousen
  const { pledge } = Stake
  const { MaiList, getKaList, getMAIList } = useNFTS()
  const [loading, setLoading] = useState<boolean>(false)
  const [show, setShow] = useState<boolean>(false)
  const [types, setTypes] = useState<'success' | 'error'>('success')
  const [tips, setTips] = useState<string>('')
  const [MaiCheckList, setMaiCheckList] = useState<string[]>([])
  const [MAICount, setMAICount] = useState<number>(0)
  const [KACount, setKACount] = useState<number>(0)
  const { account, library } = useWeb3React()
  const handleBalanceOf = useCallback(async (account: string) => {
    const res = await getBalanceOf(account)
    setMAICount(res)
    const res1 = await getKachousenBalanceOf(account)
    setKACount(res1)
  }, [getBalanceOf, getKachousenBalanceOf])
  useEffect(() => {
    if (account) void handleBalanceOf(account)
  }, [handleBalanceOf, account])
  const handleMAICheck = useCallback((id: string) => {
    const index = MaiCheckList.findIndex(item => id === item)
    const list = [...MaiCheckList]
    if (index > -1) list.splice(index, 1)
    else list.splice(MaiCheckList.length, 0, id)
    setMaiCheckList(list)
  }, [MaiCheckList])
  const disabled = useMemo(() => {
    const leng = MaiCheckList.length
    return !(PLEDGE_TOTAL.includes(leng))
  }, [MaiCheckList])

  const handleStake = useCallback(async () => {
    setLoading(true)
    if (account) {
      const res = await pledge(MaiCheckList, account, library)
      setTypes(res ? 'success' : 'error')
      setShow(true)
      if (res) setTips(TS_TIPS.SUCCESS.buy)
      else setTips(TS_TIPS.ERROR.mint)
      setLoading(false)
      setMaiCheckList([])
      void getMAIList(account)
      void getKaList(account)
      void handleBalanceOf(account)
      dispatch(setShareMsg(JSON.stringify(MaiCheckList)))
    }
  }, [dispatch, MaiCheckList, account, library, pledge, TS_TIPS, getMAIList, getKaList, handleBalanceOf])

  const MAI_DOM = useMemo(() => {
    return <div className='m-stake-step2-cont-item'>
    <h1>{ts.Mai}</h1>
    <dl>
      <dd>{ts.stakeDesc1}</dd>
      <dt>{ts.total} {MAICount}</dt>
    </dl>
    {
      MaiList.length > 0
      ? <>
        <div className='card-list'>
          {
            MaiList.map(item => <div onClick={() => handleMAICheck(item.tokenId)} className={classNames('card', { checked: MaiCheckList.includes(item.tokenId) })} key={item.tokenId}>
              <img src={item.image} alt="" />
            </div>)
          }
        </div>
        <p>{t('STAKE.STEP2.expected1', { type: '1/3/5/10' })}</p>
      </>
      : <p className='empty'>{ts.empty}</p>
    }
  </div>
  }, [MaiCheckList, handleMAICheck, t, ts.Mai, ts.stakeDesc1, ts.total, ts.empty, MAICount, MaiList])
  const CANDY_DOM = useMemo(() => {
    return <div className='m-stake-step2-cont-item'>
    <h1>{ts.Kachousen}</h1>
    <dl>
      <dd>{ts.stakeDesc2}</dd>
      <dt>{ts.total} {KACount}</dt>
    </dl>
    {/* <div className='card-list'>
      {
        CandyList.map(item => <div onClick={() => handleCANDYCheck(item.tokenId)} className={classNames('card', { checked: CandyCheckList.includes(item.tokenId) })} key={item.tokenId}>
          <img src={item.image} alt="" />
        </div>)
      }
    </div> */}
    {/* <p>{t('STAKE.STEP2.expected2', { candies: 'xxx', fragment: '#4 & #5' })}</p> */}
    <Button loading={loading} className='m-stake-step2-cont-stake' size='medium' disabled={disabled} onClick={handleStake}>Stake</Button>
  </div>
  }, [loading, handleStake, disabled, ts.stakeDesc2, ts.total, ts.Kachousen, KACount])
  return <>
    {
       account && <div className='m-stake-step1 m-stake-step2'>
        <h1 className='m-stake-step1-title' dangerouslySetInnerHTML={{ __html: ts.title }}/>
        <ContainerBg className='m-stake-step2-cont'>
          {MAI_DOM}
          {MaiList.length > 0 && CANDY_DOM}
        </ContainerBg>
      </div>
    }
    <Tips tip={tips} show={show} type={types} onClose={() => setShow(false)}/>
  </>
}

export default Index
