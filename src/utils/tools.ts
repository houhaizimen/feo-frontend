import { getAddress } from '@ethersproject/address'

export const isMobile = () => {
  const isPhone = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i) != null
  const isVPhone = window.name === 'mobile'
  return isPhone || isVPhone
}

export const isAddress = (address: string): string | false => {
  try {
    return getAddress(address)
  } catch {
    return false
  }
}
