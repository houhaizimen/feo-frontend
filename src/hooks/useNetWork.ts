export const useNetWork = () => {
  void window?.ethereum?.on('accountsChanged', (acounts: string) => {
    console.log(acounts)
    window.location.reload()
  })
  void window?.ethereum?.on('chainChanged', (newNetwork: string) => {
    console.log(newNetwork)
    window.location.reload()
  })
}
