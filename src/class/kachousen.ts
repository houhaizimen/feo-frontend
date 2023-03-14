import { getkachousenContract } from '@/config/getContract'
// import { Web3Provider } from '@ethersproject/providers'
import { getBalanceAmount } from '@/utils/formatAmount'
// import estimateGas from '@/utils/estimateGas'
// import { getMerkleTree } from '@/utils/merkletree'

class Kachousen {
  getBalanceOf = async (account: string) => {
    const contract = getkachousenContract()
    const res = await contract.balanceOf(account)
    return getBalanceAmount(res?._hex ?? 0, 0)
  }
}
export default new Kachousen()
