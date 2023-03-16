import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import { Web3ReactProvider } from '@web3-react/core'
import { getLibrary } from '@/utils/provider'
import '@/language/config'

import 'antd-mobile/es/global'
import '@/style/style.scss'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <Web3ReactProvider getLibrary={getLibrary}>
    <App />
  </Web3ReactProvider>
)
