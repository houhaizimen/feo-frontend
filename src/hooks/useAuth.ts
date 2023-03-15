import { useCallback, useEffect } from 'react'
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import { USER_LOCAL_CONNECT, USER_LOCAL_NAME, injected, setupNetwork, ConnectorNames, connectorsByName } from '@/utils/wallet'
import useLogin from '@/hooks/useLogin'

const { key } = USER_LOCAL_CONNECT
const { name } = USER_LOCAL_NAME

export const useAuth = () => {
  const { activate, deactivate } = useWeb3React()
  const { ServerLogin } = useLogin()
  const login = useCallback(async(connectorID: ConnectorNames) => {
    const getConnector = connectorsByName[connectorID]
    const connector = typeof getConnector !== 'function' ? connectorsByName[connectorID] : await getConnector()
    activate(connector, async (error: Error) => {
      if (error instanceof UnsupportedChainIdError) {
        const type = localStorage.getItem(name) as string ?? ''
        const hasSetup: boolean = await setupNetwork({ type })
        if (hasSetup) {
          void activate(injected)
        }
      } else {
        console.log('Pending Error Occured')
      }
    }).catch(err => {
      console.log(err)
    })
    void ServerLogin()
  }, [activate, ServerLogin])
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
    value && login(value)
  }, [login])
}
