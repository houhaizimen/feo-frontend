
import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { getRPC, getChainId } from '@/utils/provider'
import { ChainId } from '@/config/types'

export const USER_LOCAL_CONNECT = {
  key: 'connectId'
}

export enum ConnectorNames {
  Injected = 'injected',
  WalletConnect = 'walletconnect',
  WalletLink = 'walletlink'
}

const chainId: number = parseInt(getChainId())

export const injected = new InjectedConnector({
  supportedChainIds: [chainId]
})

export const walletconnect = new WalletConnectConnector({
  rpc: { [chainId]: getRPC() },
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true
})

const walletLink = async () => {
  const { WalletLinkConnector } = await import('@web3-react/walletlink-connector')
  return new WalletLinkConnector({
    url: getRPC(),
    appName: 'Fighter Era Odyssey',
    supportedChainIds: [ChainId.MAIN_CHAIN_ID, ChainId.TEST_CHAIN_ID]
  })
}

export const connectorsByName: { [connectorName in ConnectorNames]: any } = {
  [ConnectorNames.Injected]: injected,
  [ConnectorNames.WalletConnect]: walletconnect,
  [ConnectorNames.WalletLink]: walletLink
}

// auto register network
export const setupNetwork = async (): Promise<boolean> => {
  const provider = window?.ethereum
  if (provider != null) {
    const chainId = parseInt(getChainId(), 10)
    try {
      await provider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: `0x${chainId.toString(16)}` }]
      })
      return true
    } catch (e) {
      await provider.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: `0x${chainId.toString(16)}`,
            rpcUrls: '',
            blockExplorerUrls: [getRPC()]
          }
        ]
      })
        .then(() => true)
        .catch(() => {
          console.error("Can't setup the ETH network on metamask because window.ethereum is undefined")
          return false
        })
    }
  }
  return false
}

export const walletList = [
  {
    name: 'Metamask',
    icon: 'metamask',
    connectId: ConnectorNames.Injected
  },
  // {
  //   name: 'OKX',
  //   icon: 'metamask',
  //   connectId: ConnectorNames.Injected
  // },
  {
    name: 'Coinbase',
    icon: 'coinbase',
    connectId: ConnectorNames.WalletLink
  },
  {
    name: 'WalletConnect',
    icon: 'wallet-connect',
    connectId: ConnectorNames.WalletConnect
  }
]
