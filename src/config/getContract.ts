import { ethers, ContractInterface } from 'ethers'
import { JSONRPCProvider, getChainId } from '@/utils/provider'
import RunnersABI from '@/abi/Runners.json'
import kachousenABI from '@/abi/kachousen.json'
import StakeABI from '@/abi/Stake.json'
import { contracts } from './contract'

export const getContractAddress = (name: string) => {
  return contracts[name][Number(getChainId())]
}

export const getContract = (abi: ContractInterface, address: string, signer?: ethers.Signer | ethers.providers.Provider) => {
  const signerOrProvider = signer ?? JSONRPCProvider
  return new ethers.Contract(address, abi, signerOrProvider)
}

export const getRunnersContract = (signer?: ethers.Signer | ethers.providers.Provider): any => {
  return getContract(RunnersABI, getContractAddress('Runners'), signer)
}

export const getkachousenContract = (signer?: ethers.Signer | ethers.providers.Provider): any => {
  return getContract(kachousenABI, getContractAddress('KachousenNFT'), signer)
}

export const getStakeContract = (signer?: ethers.Signer | ethers.providers.Provider): any => {
  return getContract(StakeABI, getContractAddress('StakeNFT'), signer)
}
