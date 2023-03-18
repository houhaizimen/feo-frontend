import { useAppSelector } from '@/store'

// 数据共享
export const useShareState = () => useAppSelector((state: any) => state.share.data)
