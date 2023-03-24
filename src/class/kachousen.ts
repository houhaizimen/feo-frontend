import { getkachousenContract, getTokenIdContract, getContractAddress } from '@/config/getContract'
// import { Web3Provider } from '@ethersproject/providers'
import { getBalanceAmount } from '@/utils/formatAmount'
import { getProxy } from '@/api'
import { tokenURI_PROPS } from '@/class/Runners'
// import estimateGas from '@/utils/estimateGas'
// import { getMerkleTree } from '@/utils/merkletree'

class Kachousen {
  getKachousenBalanceOf = async (account: string) => {
    const contract = getkachousenContract()
    const res = await contract.balanceOf(account)
    return getBalanceAmount(res?._hex ?? 0, 0)
  }

  getTotalSupply = async (): Promise<any> => {
    const contract = getkachousenContract()
    const res = await contract.totalSupply()
    return getBalanceAmount(res?._hex ?? 0, 0)
  }

  getKaTokenURI = async (account: string): Promise<tokenURI_PROPS[]> => {
    const contract = getkachousenContract()
    const tokenIdContract = getTokenIdContract()
    const total = await this.getTotalSupply()
    let tokenIds = await tokenIdContract.getOwnedTokenIdList(getContractAddress('KachousenNFT'), account, 1, Number(total) + 1)
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
      return { ...item, image: `https://${item.image?.split('//')?.[1]}.ipfs.dweb.link`, tokenId: tokenIds[index] }
    })
  }
}
export default new Kachousen()
