import React, { useEffect, useCallback, useState } from 'react'
import { getUserBagIndex } from '@/api'
import { useWeb3React } from '@web3-react/core'

import Footer from '@/components/mobile/Footer'
import Grandies from './Compnents/gandies'
// import MyStake from './Compnents/MyStake'
// import MyNFT from './Compnents/MyNFT'
import Map from './Compnents/map'

const Index = () => {
  const { account } = useWeb3React()
  const [Profile, setProfile] = useState<any>()
  const getProfile = useCallback(async () => {
    const res = await getUserBagIndex()
    setProfile(res?.data ?? {})
  }, [])
  useEffect(() => {
    if (account) void getProfile()
  }, [account, getProfile])
  return <div className='m-profile'>
    <div className='m-profile-cont'>
      <Grandies Profile={Profile}/>
      {/* <MyStake Stake={Profile?.userStakingRespList ?? []}/> */}
      {/* <MyNFT /> */}
      <Map Fragment={Profile?.userFragmentRespList ?? []}/>
    </div>
    <Footer />
  </div>
}

export default Index
