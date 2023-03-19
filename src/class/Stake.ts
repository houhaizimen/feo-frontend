import { getStakeContract, getRunnersContract, getContractAddress } from '@/config/getContract'
import { Web3Provider } from '@ethersproject/providers'
import estimateGas from '@/utils/estimateGas'

class Stake {
  async pledge (tokenList: string[], account: string, library: Web3Provider) {
    const contractA = getRunnersContract(library.getSigner(account))
    const contract = getStakeContract(library.getSigner(account))
    try {
      const isApproved = await contractA.isApprovedForAll(account, getContractAddress('StakeNFT'))
      console.log(isApproved)
      if (!isApproved) {
        const tx1 = await contractA.setApprovalForAll(getContractAddress('StakeNFT'), true)
        await tx1.wait()
      }
      const gasLimit = await estimateGas(contract, 'stake', [tokenList], 0)
      const tx = await contract.stake(tokenList, { gasLimit })
      console.log(tx)
      const res = await tx.wait()
      return res.status === 1
    } catch (e) {
      console.log(e)
      return false
    }
  }

  async removePledge (id: string, account: string, library: Web3Provider) {
    const contract = getStakeContract(library.getSigner(account))
    try {
      const gasLimit = await estimateGas(contract, 'unstake', [id, { value: 0 }])
      console.log(gasLimit)
      const tx = await contract.unstake(id, { gasLimit })
      const res = await tx.wait()
    return res.status === 1
    } catch (e) {
      console.log(e)
      return false
    }
  }
}
export default new Stake()
