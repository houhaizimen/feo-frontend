/// <reference types="react-scripts" />

declare module 'react/jsx-runtime' {
  export default any
}

interface Window {
  ethereum: {
    isMetaMask?: true
    request: (...args: any[]) => Promise<void>
    on: (...args: any[]) => Promise<void>
  },
  imgLang: string
}
