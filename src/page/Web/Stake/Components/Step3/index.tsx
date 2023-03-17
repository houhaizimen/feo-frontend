import React, { useEffect, useCallback, useState, useMemo } from 'react'
import { useWeb3React } from '@web3-react/core'
import { getUserBagIndex } from '@/api'
import StakeContract from '@/class/Stake'
import { useTranslation } from 'react-i18next'
import ContainerBg from '@/components/common/ContainerBg'
import Button from '@/components/common/Button'
import Tips from '@/components/common/Tips'

const Index = () => {
  const { removePledge } = StakeContract
  const { t } = useTranslation()
  const ts: Record<string, any> = t('PROFILE.MYSTAKE', { returnObjects: true })
  const [show, setShow] = useState<boolean>(false)
  const [types, setTypes] = useState<'success' | 'error'>('success')
  const [tips, setTips] = useState<string>('')
  const { account, library } = useWeb3React()
  const [Stake, setStake] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(false)
  const getProfile = useCallback(async () => {
    const res = await getUserBagIndex()
    setStake(res?.data?.userStakingRespList ?? [])
  }, [])
  useEffect(() => {
    if (account) void getProfile()
  }, [account, getProfile])
  const stakeList = useMemo(() => {
    return Stake.length > 0 && Stake.map((item: any) => {
      const now = new Date().getTime()
      const time = new Date(item.pledgeEndDate).getTime()
      return {
        start: item.pledgeStartDate,
        end: item.pledgeEndDate,
        amount: item.pledgeNum,
        locked: now < time,
        candyDay: item.candyDay,
        pledgeCandy: item.pledgeCandy,
        pledgeFragments: item.pledgeFragments,
        pledgeFragmentList: item.pledgeFragmentList
      }
    })
  }, [Stake])
  const handleWithdraw = async (item: any) => {
    setLoading(true)
    if (item.locked) {
      setTypes('error')
      setTips(ts.unlocked)
      setShow(true)
    } else {
      await removePledge(item.id, account ?? '', library)
      void getProfile()
    }
    setLoading(false)
  }
  return <>
    {
      account && <div className='web-stake-step1 web-stake-step3'>
        <h1 className='web-stake-step1-title'>{ts.step}<span>3</span>{ts.title}</h1>
       {
        stakeList && stakeList.length > 0 && stakeList.map((item: any, index: number) => {
          return <ContainerBg className='web-stake-step3-cont' key={index}>
            <header>
                <span>{ts.TITLE_LIST[1]}: {item.start}</span>
                <span>{ts.TITLE_LIST[2]}: {item.end}</span>
            </header>
            <ul className='list'>
              <li>
                <span>{ts.stake}</span>
                <span>{ts.amount}</span>
                <span>{ts.status}</span>
              </li>
              <li>
                <span>{ts.mai}</span>
                <span>{item.amount}</span>
                <span>{item.locked ? `${ts.locked}` : ''}</span>
              </li>
            </ul>
            <ul className='list bottom'>
              <li>
                <span>{ts.reward}</span>
                <span>{ts.amount}</span>
                <span>{ts.Details}</span>
              </li>
              <li>
                <span>{ts.Candy}</span>
                <span>{item.pledgeCandy}</span>
                <span>{item.candyDay}/d</span>
              </li>
              <li>
                <span>{ts.Fragment}</span>
                <span>{item.pledgeFragments}</span>
                <span>{
                  item.pledgeFragmentList.map((item: string) => `#${item}`)
                }</span>
              </li>
            </ul>
            <Button loading={loading} size='mini' onClick={() => handleWithdraw(item)}>{ts.withdraw}</Button>
        </ContainerBg>
        })
       }
      </div>
    }
    <Tips tip={tips} show={show} type={types} onClose={() => setShow(false)}/>
  </>
}

export default Index
