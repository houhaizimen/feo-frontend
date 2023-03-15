import React, { FC, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import ContainerBg from '@/components/common/ContainerBg'
import Button from '@/components/common/Button'
import Tips from '@/components/common/Tips'

interface PropsType {
  Stake: any
}

const Index: FC<PropsType> = ({ Stake }) => {
  console.log(Stake)
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [show, setShow] = useState<boolean>(false)
  const [types, setTypes] = useState<'success' | 'error'>('success')
  const [tips, setTips] = useState<string>('')
  const ts: Record<string, any> = t('PROFILE.MYSTAKE', { returnObjects: true })
  const stakeList = useMemo(() => {
    const res = Stake.map((item: any) => ({ nft: `Mai Shiranui x${item.pledgeNum}`, start: item.pledgeStartDate, end: item.pledgeEndDate, candies: item.pledgeCandy, fragments: `#${item.pledgeFragments}` }))
    return res
  }, [Stake])
  const handleWithdraw = (item: any) => {
    const now = new Date().getTime()
    const time = new Date(item.end).getTime()
    if (now < time) {
      setTypes('error')
      setTips('Your NFT is locked. Please withdraw after 21 days!')
      setShow(true)
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
            stakeList.map((item: any, index: number) => <div className='stake-list-cont'>
              <ul key={index}>
                <li>{item.nft}</li>
                <li>{item.start}</li>
                <li>{item.end}</li>
                <li>{item.candies}</li>
                <li>{item.fragments}</li>
              </ul>
              <Button size='mini' onClick={() => handleWithdraw(item)}>Withdraw</Button>
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
