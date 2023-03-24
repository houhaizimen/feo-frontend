export enum ChainId {
  MAIN_CHAIN_ID = 1,
  TEST_CHAIN_ID = 5
}

export interface Address {
  1: string
  5: string
  [key: string]: string
}

export interface HEADER_CHILDREN_TYPES {
  name: string
  link: string
  comming?: boolean
}
export interface HEADER_TYPES {
  name: string
  children: HEADER_CHILDREN_TYPES[]
}
