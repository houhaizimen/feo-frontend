import { getRunnersContract } from '@/config/getContract'
import { ethers } from 'ethers'
import { Web3Provider } from '@ethersproject/providers'
import { getBalanceAmount, BIG_TEN } from '@/utils/formatAmount'
import BigNumber from 'bignumber.js'
import estimateGas from '@/utils/estimateGas'
import { PRICE } from '@/config/index'
import { getMerkleTree } from '@/utils/merkletree'

class Runners {
  /**
   * @returns
   */

  getwlMintStartTime = async () => {
    const contract = getRunnersContract()
    const res = await contract.wlMintStartTime()
    return getBalanceAmount(res?._hex ?? 0, 0)
  }
  /**
   * @returns
   */

  getBlanceOf = async (account: string) => {
    const contract = getRunnersContract()
    const res = await contract.balanceOf(account)
    return getBalanceAmount(res?._hex ?? 0, 0) ?? 0
  }
  /**
   * @returns
   */

  getwlMintEndTime = async () => {
    const contract = getRunnersContract()
    const res = await contract.wlMintEndTime()
    return getBalanceAmount(res?._hex ?? 0, 0)
  }
  /**
   * @returns
   */

  getpMintStartTime = async () => {
    const contract = getRunnersContract()
    const res = await contract.pMintStartTime()
    return getBalanceAmount(res?._hex ?? 0, 0)
  }
  /**
   * @returns
   */

   publicMint = async (_quantity: number, account: string, library: Web3Provider) => {
    const contract = getRunnersContract(library.getSigner(account))
    const price = BigNumber(PRICE.P * _quantity).multipliedBy(BIG_TEN.pow(18)).toString()
    // const price = BigNumber(PRICE.P * _quantity).toString()
    const value = ethers.BigNumber.from(price)._hex
    try {
      const gasLimit = await estimateGas(contract, 'publicMint', [_quantity, { value }])
      const tx = await contract.publicMint(_quantity, { gasLimit, value })
      const res = await tx.wait()
      return res.status === 1
    } catch (e) {
      console.log(e)
      return false
    }
  }
  /**
   * @returns
   */

   whitelistMint = async (_quantity: number, account: string, library: Web3Provider) => {
    const merk = getMerkleTree(account)
    if (merk === '') {
      return -1
    }
    const contract = getRunnersContract(library.getSigner(account))
    const price = BigNumber(PRICE.W * _quantity).multipliedBy(BIG_TEN.pow(18)).toString()
    // const price = BigNumber(PRICE.P * _quantity).toString()
    const value = ethers.BigNumber.from(price)._hex
    try {
      const gasLimit = await estimateGas(contract, 'whitelistMint', [merk, _quantity, { value }])
      const tx = await contract.whitelistMint(merk, _quantity, { gasLimit, value })
      const res = await tx.wait()
      return res.status
    } catch (e) {
      return -2
    }
  }
}
export default new Runners()
