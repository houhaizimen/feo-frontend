import React, { FC, useMemo, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import StakeContract from '@/class/Stake'
import ContainerBg from '@/components/common/ContainerBg'
import Button from '@/components/common/Button'
import Tips from '@/components/common/Tips'

interface PropsType {
  Stake: any
}

const Index: FC<PropsType> = ({ Stake }) => {
  console.log(Stake)
  const { removePledge } = StakeContract
  const [loading, setLoading] = useState<boolean>(false)
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [show, setShow] = useState<boolean>(false)
  const [types, setTypes] = useState<'success' | 'error'>('success')
  const [tips, setTips] = useState<string>('')
  const ts: Record<string, any> = t('PROFILE.MYSTAKE', { returnObjects: true })
  const { account, library } = useWeb3React()
  const stakeList = useMemo(() => {
    const res = Stake.map((item: any) => ({ nft: `Mai Shiranui x${item.pledgeNum}`, start: item.pledgeStartDate, end: item.pledgeEndDate, candies: item.pledgeCandy, fragments: `#${item.pledgeFragments}` }))
    return res
  }, [Stake])
  const handleWithdraw = async (item: any) => {
    setLoading(true)
    const now = new Date().getTime()
    const time = new Date(item.end).getTime()
    if (now < time) {
      setTypes('error')
      setTips(ts.unlocked)
      setShow(true)
    } else {
      await removePledge(item.id, account ?? '', library)
    }
  }
  return <div className='web-profile-my-stake'>
    <h1 className='profile-title'>{ts.title}</h1>
    <ContainerBg className='web-profile-my-stake-wrap'>
      {
        stakeList.length === 0 && <p>{ts.desc}</p>
      }
      {
        stakeList.length > 0 && <div className='stake-list'>
          {
            <ul>
              {
                ts.TITLE_LIST.map((item: string) => <li key={item}>{item}</li>)
              }
            </ul>
          }
          {
            stakeList.map((item: any, index: number) => <div className='stake-list-cont' key={index}>
              <ul>
                <li>{item.nft}</li>
                <li>{item.start}</li>
                <li>{item.end}</li>
                <li>{item.candies}</li>
                <li>{item.fragments}</li>
              </ul>
              <Button size='mini' loading={loading} onClick={() => handleWithdraw(item)}>{ts.withdraw}</Button>
            </div>)
          }
        </div>
      }
      <Button size='medium' onClick={() => navigate('/stake')}>{ts.to}</Button>
      <Tips tip={tips} show={show} type={types} onClose={() => setShow(false)}/>
    </ContainerBg>
  </div>
}

export default Index
