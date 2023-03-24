import { getRunnersContract, getTokenIdContract, getContractAddress } from '@/config/getContract'
import { Web3Provider } from '@ethersproject/providers'
import { getBalanceAmount, getAountToBigHex } from '@/utils/formatAmount'
import estimateGas from '@/utils/estimateGas'
import { getMerkleTree } from '@/utils/merkletree'
import { getProxy } from '@/api'

export interface tokenURI_PROPS {
  image: string
  name: string
  description: string
  tokenId: string
}

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
    console.log(22222222222222)
    const res = await contract.balanceOf(account)
    console.log(res)
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
    return [getBalanceAmount(res?._hex ?? 0, 18), res?._hex]
  }
  /**
   * @returns
   */

  getWlPrice = async (): Promise<any[]> => {
    const contract = getRunnersContract()
    const res = await contract.wlPrice()
    console.log(res)
    return [getBalanceAmount(res?._hex ?? 0, 18), res?._hex]
  }

  getmaxSupply = async (): Promise<any> => {
    const contract = getRunnersContract()
    const res = await contract.maxSupply()
    console.log(res)
    return getBalanceAmount(res?._hex ?? 0, 0)
  }

  getTotalSupply = async (): Promise<any> => {
    const contract = getRunnersContract()
    const res = await contract.totalSupply()
    console.log(res)
    return getBalanceAmount(res?._hex ?? 0, 0)
  }
  /**
   * @returns
   */

   publicMint = async (_quantity: number, account: string, library: Web3Provider) => {
    const contract = getRunnersContract(library.getSigner(account))
    const prices = await this.getPPrice()
    const value = getAountToBigHex(prices[1], _quantity)
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
    const prices = await this.getWlPrice()
    const value = getAountToBigHex(prices[1], _quantity)
    try {
      const gasLimit = await estimateGas(contract, 'whitelistMint', [merk, _quantity, { value }]) // value： send amount
      const tx = await contract.whitelistMint(merk, _quantity, { gasLimit, value })
      const res = await tx.wait()
      return res.status
    } catch (e) {
      return -2
    }
  }

  getBalanceOf = async (account: string) => {
    const contract = getRunnersContract()
    const res = await contract.balanceOf(account)
    return getBalanceAmount(res?._hex ?? 0, 0)
  }

  getTokenURI = async (account: string): Promise<tokenURI_PROPS[]> => {
    const contract = getRunnersContract()
    const tokenIdContract = getTokenIdContract()
    const total = await this.getTotalSupply()
    let tokenIds = await tokenIdContract.getOwnedTokenIdList(getContractAddress('Runners'), account, 1, Number(total) + 1)
    tokenIds = tokenIds.map((item: any) => getBalanceAmount(item?._hex ?? 0, 0))
    const reqList = tokenIds.map((item: string | number) => contract.tokenURI(item))
    const res = await Promise.all(reqList)
    const reqJSON = res.map(item => {
      const str = item.split('//')[1]
      const [key, file] = str.split('/')
      return getProxy(`https://${key}.ipfs.dweb.link/${file}`)
    })
    const jsonRes = await Promise.all(reqJSON)
    return jsonRes.map((item, index) => {
      if (item.image) {
        return { ...item, image: `https://${item.image?.split('//')?.[1]}.ipfs.dweb.link`, tokenId: tokenIds[index] }
      } else {
        return null
      }
    }).filter(item => item !== null)
  }
}
export default new Runners()
