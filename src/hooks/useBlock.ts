import { JSONRPCProvider } from '@/utils/provider'
import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'

export const useBlockNumber = () => { // 获取块的高度
  const fetcher = async () => await JSONRPCProvider.getBlockNumber()
  // 6000读一次数据
  useSWR('blockNumber', fetcher, {
    refreshInterval: 6000
  })
}

export const useCurrentBlock = (): number => {
  const { data: currentBlock = 0 } = useSWRImmutable(['blockNumber'])
  return currentBlock
}
