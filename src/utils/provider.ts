import { ethers } from 'ethers'

export const getRPC = (): string => process.env.REACT_APP_RPC ?? ''
console.log(process.env.REACT_APP_CHAINID)
export const getChainId = () => process.env.REACT_APP_CHAINID ?? '5'

export const JSONRPCProvider = new ethers.providers.JsonRpcProvider(getRPC(), parseInt(getChainId()))

export function getLibrary(provider: ethers.providers.ExternalProvider) {
  const library = new ethers.providers.Web3Provider(provider)
  library.pollingInterval = 12000
  return library
}
