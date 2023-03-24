import { useState, useCallback, useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import Runners, { tokenURI_PROPS } from '@/class/Runners'
import Kachousen from '@/class/kachousen'

const useNFTS = () => {
  const [MaiList, setMaiList] = useState<tokenURI_PROPS[]>([])
  const [CandyList, setCandyList] = useState<tokenURI_PROPS[]>([])
  const { getTokenURI } = Runners
  const { getKaTokenURI } = Kachousen
  const { account } = useWeb3React()
  const getMAIList = useCallback(async (account: string) => {
    const infoList = await getTokenURI(account)
    setMaiList(infoList)
  }, [getTokenURI])
  const getKaList = useCallback(async (account: string) => {
    const infoList = await getKaTokenURI(account)
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
