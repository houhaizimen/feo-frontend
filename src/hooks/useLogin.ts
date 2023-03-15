import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import { getRegAndLogin, getUserBagIndex } from '@/api'

const useLogin = () => {
  const { account, library } = useWeb3React()
  const ServerLogin = useCallback(async () => {
    const token = localStorage.getItem('token')
    const res = await getUserBagIndex()
    if (res.code === '503' || !token) {
      if (account) {
        const signer = library.getSigner(account)
        const message = new Date().getTime().toString()
        const signature = await signer.signMessage(message)
        const res = await getRegAndLogin({ address: account, message, signature })
        localStorage.setItem('token', res?.data?.token)
      }
    }
  }, [account, library])
  return {
    ServerLogin
  }
}

export default useLogin
