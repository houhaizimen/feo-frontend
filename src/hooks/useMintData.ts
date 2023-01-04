import { useCallback, useEffect, useMemo, useState } from 'react'
import Runners from '@/class/Runners'
export const useMintData = (account: string, balance: string) => {
  const { getBlanceOf, getwlMintStartTime, getwlMintEndTime, getpMintStartTime, getMaxMinted } = Runners
  const [count, setCount] = useState<number>(0)
  const [isWhiteTime, setIsWhiteTime] = useState<boolean>(false)
  const [isPTime, setIsPTime] = useState<boolean>(false)
  const [maxCount, setMaxCount] = useState<number>(0)
  const handleGetStartTime = useCallback(async () => {
    const wStart = await getwlMintStartTime()
    const wEnd = await getwlMintEndTime()
    const pStart = await getpMintStartTime()
    const now = new Date().getTime()
    const bol = now >= wStart * 1000 && now <= wEnd * 1000
    setIsWhiteTime(bol)
    setIsPTime(now > pStart)
    return {
      wTime: bol,
      pTime: now > pStart
    }
  }, [getwlMintStartTime, getwlMintEndTime, getpMintStartTime])

  const handleBalanceOf = useCallback(async (account: string) => {
    const res = await getBlanceOf(account)
    setCount(res)
  }, [getBlanceOf])

  const handleMaxMinted = useCallback(async () => {
    const res = await getMaxMinted()
    setMaxCount(res)
  }, [getMaxMinted])

  useEffect(() => {
    void handleMaxMinted()
   }, [handleMaxMinted])

  useEffect(() => {
    void handleGetStartTime()
  }, [handleGetStartTime])

  useEffect(() => {
    if (account) void handleBalanceOf(account)
  }, [handleBalanceOf, account])
  const max = useMemo(() => {
    if (isWhiteTime) {
      return maxCount - count
    }
    return 100
  }, [isWhiteTime, count, maxCount])
  const disabled = useMemo(() => {
    if (isWhiteTime && max === 0) return false
    return (!isWhiteTime && !isPTime) || !account || !balance
  }, [isWhiteTime, isPTime, account, balance, max])
  return {
    max,
    disabled,
    handleGetStartTime
  }
}
