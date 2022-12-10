import { ethers } from 'ethers'
import { JSONRPCProvider } from '@/utils/provider'

export const getContract = (abi: any, address: string, signer?: ethers.Signer | ethers.providers.Provider) => {
  const signerOrProvider = signer ?? JSONRPCProvider
  return new ethers.Contract(address, abi, signerOrProvider)
}
