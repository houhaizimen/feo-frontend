import { request } from '@/utils/request'

interface MaiListProps {
  address: string
  contractaddress: string
  type: number
}

export const getMaiList = async (params: MaiListProps): Promise<any> => {
  // return await request.post('noLogin/token/listtest', { ...params, page: 1, offset: 100 })
  return await request.post('noLogin/token/list', { ...params, page: 1, offset: 100 })
}
interface LoginProps {
  address: string
  message: string
  signature: string
}

export const getRegAndLogin = async (params: LoginProps): Promise<any> => {
  return await request.post('login/regAndLogin', { ...params })
}

interface LiquidationProps {
  address: string
  message: string
  signature: string
}

export const getLiquidation = async (params: LiquidationProps): Promise<any> => {
  return await request.post('pledge/liquidation', { ...params })
}

export const getUserBagIndex = async (): Promise<any> => {
  return await request.post('bag/userBagIndex', {})
}

export const getUserDraw = async (): Promise<any> => {
  return await request.post('draw/userDraw', {})
}
export const getProxy = async (url: string): Promise<any> => {
  return await request.post('noLogin/token/getProxy', { url })
}

export const getInfoList = async (url: string): Promise<any> => {
  return await request.get(url, {}, { baseURL: '' })
}
