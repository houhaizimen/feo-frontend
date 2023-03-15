import { getStakeContract, getRunnersContract, getContractAddress } from '@/config/getContract'
import { Web3Provider } from '@ethersproject/providers'
import estimateGas from '@/utils/estimateGas'

class Stake {
  async pledge (tokenList: string[], account: string, library: Web3Provider) {
    console.log(tokenList)
    const contractA = getRunnersContract(library.getSigner(account))
    const contract = getStakeContract(library.getSigner(account))
    try {
      const isApproved = await contractA.isApprovedForAll(account, getContractAddress('StakeNFT'))
      if (!isApproved) {
        await contractA.setApprovalForAll(getContractAddress('StakeNFT'), true)
      }
      const gasLimit = await estimateGas(contract, 'pledge', [tokenList])
      console.log(gasLimit)
      const tx = await contract.pledge(tokenList, { gasLimit })
      const res = await tx.wait()
      return res.status
    } catch (e) {
      console.log(e)
      return false
    }
  }

  async removePledge (id: string, account: string, library: Web3Provider) {
    const contract = getStakeContract(library.getSigner(account))
    try {
      const gasLimit = await estimateGas(contract, 'removePledge', [id])
      console.log(gasLimit)
      const tx = await contract.removePledge(id, { gasLimit })
      const res = await tx.wait()
      return res.status
    } catch (e) {
      console.log(e)
      return false
    }
  }
}
export default new Stake()
