import { request } from '@/utils/request'

interface MaiListProps {
  address: string
  contractaddress: string
}
export const getMaiList = async (params: MaiListProps): Promise<any> => {
  return await request.post('noLogin/token/listtest', { ...params, page: 1, offset: 100 })
}

export const getInfoList = async (url: string): Promise<any> => {
  return await request.get(url, {}, { baseURL: '' })
}
