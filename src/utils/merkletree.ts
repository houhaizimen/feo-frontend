import { MerkleTree } from 'merkletreejs'
import { keccak256 } from '@ethersproject/keccak256'
import { whilteList } from '@/config/whiteList'

export const getMerkleTree = (address: string) => {
  const index = whilteList.findIndex(item => item === address)
  if (index === -1) return ''
  const Nodes = whilteList.map((item: string) => keccak256(item))
  const tree = new MerkleTree(Nodes, keccak256, { sortPairs: true })
  return tree.getHexProof(Nodes[index])
}
