import { getkachousenContract } from '@/config/getContract'
// import { Web3Provider } from '@ethersproject/providers'
import { getBalanceAmount } from '@/utils/formatAmount'
import { getInfoList } from '@/api'
import { tokenURI_PROPS } from '@/class/Runners'
// import estimateGas from '@/utils/estimateGas'
// import { getMerkleTree } from '@/utils/merkletree'

class Kachousen {
  getKachousenBalanceOf = async (account: string) => {
    const contract = getkachousenContract()
    const res = await contract.balanceOf(account)
    return getBalanceAmount(res?._hex ?? 0, 0)
  }

  getKaTokenURI = async (tokenId: string[]): Promise<tokenURI_PROPS[]> => {
    const contract = getkachousenContract()
    const reqList = tokenId.map(item => contract.tokenURI(item))
    const res = await Promise.all(reqList)
    const reqJSON = res.map(item => {
      const str = item.split('//')[1]
      const [key, file] = str.split('/')
      return getInfoList(`https://${key}.ipfs.dweb.link/${file}`)
    })
    const jsonRes = await Promise.all(reqJSON)
    return jsonRes.map((item, index) => {
      return { ...item, image: `https://${item.image.split('//')[1]}.ipfs.dweb.link`, tokenId: tokenId[index] }
    })
  }
}
export default new Kachousen()
