import { useState, useCallback, useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import Runners, { tokenURI_PROPS } from '@/class/Runners'
import Kachousen from '@/class/kachousen'
import { getContractAddress } from '@/config/getContract'
import { getMaiList } from '@/api'

const useNFTS = () => {
  const [MaiList, setMaiList] = useState<tokenURI_PROPS[]>([])
  const [CandyList, setCandyList] = useState<tokenURI_PROPS[]>([])
  const { getTokenURI } = Runners
  const { getKaTokenURI } = Kachousen
  const { account } = useWeb3React()
  const getMAIList = useCallback(async (account: string) => {
    const res = await getMaiList({ address: account, contractaddress: getContractAddress('Runners') })
    const list = res?.result.map((item: any) => item.TokenId)
    const infoList = await getTokenURI(list.slice(0, 9))
    setMaiList(infoList)
    // const url = `https://api.etherscan.io/api?module=account&action=addresstokennftinventory&address=${account}&contractaddress=${getContractAddress('Runners')}&page=1&offset=1000&apikey=C7BK3J4889CZKHAANJ6JJ8J55I4MTZA513`
    // const res = await fetch(url)
    // const resObj = await res.json()
    // console.log(resObj)
  }, [getTokenURI])
  const getKaList = useCallback(async (account: string) => {
    const res = await getMaiList({ address: account, contractaddress: getContractAddress('KachousenNFT') })
    const list = res?.result.map((item: any) => item.TokenId)
    const infoList = await getKaTokenURI(list)
    setCandyList(infoList)
  }, [getKaTokenURI])
  useEffect(() => {
    if (account) {
      void getMAIList(account)
      void getKaList(account)
    }
  }, [getMAIList, getKaList, account])
  return {
    MaiList,
    CandyList,
    getKaList,
    getMAIList
  }
}

export default useNFTS
