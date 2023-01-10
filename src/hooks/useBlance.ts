import { JSONRPCProvider } from '@/utils/provider'
import BigNumber from 'bignumber.js'
import useSWR from 'swr'

export const useBalance = (address: string) => { // 获取块的高度
  const fetcher = async () => await JSONRPCProvider.getBalance(address)
  const { data } = useSWR('balance', fetcher)
  let balance = ''
  if (data) {
    const decimal = new BigNumber(10).pow(18)
    balance = new BigNumber(data._hex).dividedBy(decimal).toString()
  }
  return balance
}
