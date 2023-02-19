import { getRunnersContract } from '@/config/getContract'
import { Web3Provider } from '@ethersproject/providers'
import { getBalanceAmount, getAountToBigHex } from '@/utils/formatAmount'
import estimateGas from '@/utils/estimateGas'
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

  getpMintEndTime = async () => {
    const contract = getRunnersContract()
    const res = await contract.pMintEndTime()
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

   getMaxMinted = async () => {
    const contract = getRunnersContract()
    const res = await contract.maxWLMinted()
    return getBalanceAmount(res?._hex ?? 0, 0)
  }
  /**
   * @returns
   */

  getPPrice = async (): Promise<any[]> => {
    const contract = getRunnersContract()
    const res = await contract.pPrice()
    console.log('pprice')
    console.log([getBalanceAmount(res?._hex ?? 0, 18), res?._hex])
    return [getBalanceAmount(res?._hex ?? 0, 18), res?._hex]
  }
  /**
   * @returns
   */

  getWlPrice = async (): Promise<any[]> => {
    const contract = getRunnersContract()
    const res = await contract.wlPrice()
    console.log('wprice')
    console.log([getBalanceAmount(res?._hex ?? 0, 18), res?._hex])
    return [getBalanceAmount(res?._hex ?? 0, 18), res?._hex]
  }
  /**
   * @returns
   */

   publicMint = async (_quantity: number, account: string, library: Web3Provider) => {
    const contract = getRunnersContract(library.getSigner(account))
    const prices = await this.getPPrice()
    const value = getAountToBigHex(prices[1], _quantity)
    console.log(value)
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
    console.log(merk)
    const contract = getRunnersContract(library.getSigner(account))
    const prices = await this.getWlPrice()
    const value = getAountToBigHex(prices[1], _quantity)
    console.log(value)
    try {
      const gasLimit = await estimateGas(contract, 'whitelistMint', [merk, _quantity, { value }]) // value： send amount
      const tx = await contract.whitelistMint(merk, _quantity, { gasLimit, value })
      const res = await tx.wait()
      return res.status
    } catch (e) {
      return -2
    }
  }
}
export default new Runners()
