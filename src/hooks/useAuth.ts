import { useCallback, useEffect } from 'react'
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import { USER_LOCAL_CONNECT, injected, setupNetwork, ConnectorNames, connectorsByName } from '@/utils/wallet'

const { key } = USER_LOCAL_CONNECT

export const useAuth = () => {
  const { activate, deactivate } = useWeb3React()
  const login = useCallback(async(connectorID: ConnectorNames) => {
    const getConnector = connectorsByName[connectorID]
    const connector = typeof getConnector !== 'function' ? connectorsByName[connectorID] : await getConnector()
    activate(connector, async (error: Error) => {
      if (error instanceof UnsupportedChainIdError) {
        const hasSetup: boolean = await setupNetwork()
        if (hasSetup) {
          void activate(injected)
        }
      } else {
        console.log('Pending Error Occured')
      }
    }).catch(err => {
      console.log(err)
    })
  }, [activate])
  const logout = useCallback(() => {
    deactivate()
    localStorage.clear()
  }, [deactivate])
  return { login, logout }
}

export const useAutoConnect = () => {
  const { login } = useAuth()
  useEffect(() => {
    const value = localStorage.getItem(key) as ConnectorNames
    console.log(value)
    value && login(value)
  }, [login])
}
