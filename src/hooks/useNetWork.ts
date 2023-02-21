export const useNetWork = () => {
  void window?.ethereum?.on('accountsChanged', (acounts: string) => {
    window.location.reload()
  })
  void window?.ethereum?.on('chainChanged', (newNetwork: string) => {
    window.location.reload()
  })
  const BitKeepProvider = window?.bitkeep?.ethereum
  BitKeepProvider?.on('accountsChanged', async (accounts: string) => {
    console.log('accounts changed')
    window.location.reload()
 })
 BitKeepProvider?.on('chainChanged', async (chainId: string) => {
    console.log('chainId changed')
    window.location.reload()
 })
}
