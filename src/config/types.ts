export enum ChainId {
  MAIN_CHAIN_ID = 1,
  TEST_CHAIN_ID = 5
}

export interface Address {
  1: string
  5: string
  [key: string]: string
}
