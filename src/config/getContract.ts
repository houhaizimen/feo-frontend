import { ethers, ContractInterface } from 'ethers'
import { Address } from './types'
import { JSONRPCProvider, getChainId } from '@/utils/provider'
import RunnersABI from '@/abi/Runners.json'
import { contracts } from './contract'

export const getContract = (abi: ContractInterface, address: Address, signer?: ethers.Signer | ethers.providers.Provider) => {
  const signerOrProvider = signer ?? JSONRPCProvider
  const newAddress = address[Number(getChainId())]
  return new ethers.Contract(newAddress, abi, signerOrProvider)
}

export const getRunnersContract = (signer?: ethers.Signer | ethers.providers.Provider): any => {
  return getContract(RunnersABI, contracts.Runners, signer)
}
