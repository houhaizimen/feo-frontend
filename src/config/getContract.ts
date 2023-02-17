import { ethers, ContractInterface } from 'ethers'
import { Address } from './types'
import { JSONRPCProvider, getChainId } from '@/utils/provider'
import RunnersABI from '@/abi/Runners.json'
import kachousenABI from '@/abi/kachousen.json'
import MAIABI from '@/abi/MAI.json'
import { contracts } from './contract'

export const getContract = (abi: ContractInterface, address: Address, signer?: ethers.Signer | ethers.providers.Provider) => {
  const signerOrProvider = signer ?? JSONRPCProvider
  const newAddress = address[Number(getChainId())]
  return new ethers.Contract(newAddress, abi, signerOrProvider)
}

export const getRunnersContract = (signer?: ethers.Signer | ethers.providers.Provider): any => {
  return getContract(RunnersABI, contracts.Runners, signer)
}

export const getMAIContract = (signer?: ethers.Signer | ethers.providers.Provider): any => {
  return getContract(MAIABI, contracts.MAINFT, signer)
}

export const getkachousenContract = (signer?: ethers.Signer | ethers.providers.Provider): any => {
  return getContract(kachousenABI, contracts.KachousenNFT, signer)
}
