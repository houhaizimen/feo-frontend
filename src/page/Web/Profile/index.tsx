import React, { useEffect, useCallback, useState } from 'react'
import { getUserBagIndex } from '@/api'
import { useWeb3React } from '@web3-react/core'

import Footer from '@/components/web/Footer'
import Grandies from './Compnents/gandies'
import MyStake from './Compnents/MyStake'
import MyNFT from './Compnents/MyNFT'
import Map from './Compnents/map'

const Index = () => {
  const { account } = useWeb3React()
  const [Profile, setProfile] = useState<any>()
  const getProfile = useCallback(async () => {
    const res = await getUserBagIndex()
    console.log(res)
    setProfile(res?.data ?? {})
  }, [])
  useEffect(() => {
    if (account) void getProfile()
  }, [account, getProfile])
  return <div className='web-profile'>
    <div className='web-profile-cont'>
      <Grandies Profile={Profile}/>
      <MyStake Stake={Profile?.userStakingRespList ?? []}/>
      <MyNFT />
      <Map Fragment={Profile?.userFragmentRespList ?? []}/>
    </div>
    <Footer />
  </div>
}

export default Index
