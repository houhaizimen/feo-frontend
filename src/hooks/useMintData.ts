import { useCallback, useEffect, useMemo, useState } from 'react'
import Runners from '@/class/Runners'
export const useMintData = (account: string, balance: string) => {
  // const { getBlanceOf, getwlMintStartTime, getwlMintEndTime, getpMintStartTime, getpMintEndTime, getMaxMinted } = Runners
  const { getwlMintStartTime, getwlMintEndTime, getpMintStartTime, getpMintEndTime, getWlPrice, getPPrice } = Runners
  // const [count, setCount] = useState<number>(0)
  const [isWhiteTime, setIsWhiteTime] = useState<boolean>(false)
  const [isPTime, setIsPTime] = useState<boolean>(false)
  const [pPrice, setPPrice] = useState<any>(null)
  const [wPrice, setwPrice] = useState<any>(false)
  // const [maxCount, setMaxCount] = useState<number>(0)
  const handleGetStartTime = useCallback(async () => {
    const wStart = await getwlMintStartTime()
    const wEnd = await getwlMintEndTime()
    const pStart = await getpMintStartTime()
    const pEnd = await getpMintEndTime()
    const now = new Date().getTime()
    const bol = now >= wStart * 1000 && now <= wEnd * 1000
    const pBol = now >= pStart * 1000 && now <= pEnd * 1000
    setIsWhiteTime(bol)
    setIsPTime(pBol)
    return {
      wTime: bol,
      pTime: pBol
    }
  }, [getwlMintStartTime, getwlMintEndTime, getpMintStartTime, getpMintEndTime])

  // const handleBalanceOf = useCallback(async (account: string) => {
  //   const res = await getBlanceOf(account)
  //   setCount(res)
  // }, [getBlanceOf])

  // const handleMaxMinted = useCallback(async () => {
  //   const res = await getMaxMinted()
  //   setMaxCount(res)
  // }, [getMaxMinted])

  // useEffect(() => {
  //   void handleMaxMinted()
  //  }, [handleMaxMinted])
  const handleWlPrice = useCallback(async () => {
    console.log('wprice')
    const res = await getWlPrice()
    setwPrice(res[0])
  }, [getWlPrice])

  useEffect(() => {
    void handleWlPrice()
   }, [handleWlPrice])

  const handlePPrice = useCallback(async () => {
    const res = await getPPrice()
    setPPrice(res[0])
  }, [getPPrice])

  useEffect(() => {
    void handlePPrice()
   }, [handlePPrice])

  useEffect(() => {
    void handleGetStartTime()
  }, [handleGetStartTime])

  // useEffect(() => {
  //   if (account) void handleBalanceOf(account)
  // }, [handleBalanceOf, account])
  // const max = useMemo(() => {
  //   if (isWhiteTime) {
  //     return maxCount - count
  //   }
  //   return 100
  // }, [isWhiteTime, count, maxCount])
  const disabled = useMemo(() => {
    return (!isWhiteTime && !isPTime) || !balance
  }, [isWhiteTime, isPTime, balance])
  return {
    // max,
    pPrice,
    wPrice,
    disabled,
    handleGetStartTime
    // handleBalanceOf,
    // maxCount
  }
}
