import React, { useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import classNames from 'classnames'
import { useScroll } from 'ahooks'
import { ConnectorNames, USER_LOCAL_CONNECT } from '@/utils/wallet'
import { connectList } from '@/config'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'

const Index = () => {
  const { account } = useWeb3React()
  const { login, logout } = useAuth()
  const scroll = useScroll(document) ?? 0
  const [fixed, setFixed] = useState<boolean>(false)
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const walletList = [
    {
      name: 'Metamask',
      icon: 'metamask',
      connectId: ConnectorNames.Injected
    },
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
  const HEADER_LIST = [
    { name: 'World', link: '/' },
    { name: 'Fighter Gallery', link: '/gallery' },
    { name: 'FAQ', link: '/faqs' }
  ]
  const handleLogin = async (connector: ConnectorNames) => {
    const { key } = USER_LOCAL_CONNECT
    localStorage.setItem(key, connector)
    await login(connector)
  }
  useEffect(() => {
    const { top } = scroll as {
      left: number
      top: number
    }
    if (top > 0) setFixed(true)
    else setFixed(false)
  }, [scroll])

  const handleLink = (link: string) => {
    navigate(link)
  }

  return <>
    {/* <div className='sticky'/> */}
    <div className={ classNames('app-home-header', { fixed })}>
    <ul className='cont'>
      <li className='left' onClick={() => handleLink('/')}><img src='assets/logo.png' alt="" /></li>
      <li className='right'>
        {
          <ul className='title'>
            {
              HEADER_LIST.map(item => <li key={item.name} className={ classNames({ active: pathname === item.link })} onClick={() => handleLink(item.link)}>{item.name}</li>)
            }
          </ul>
        }
        {
          <div className='link'>
            {
              connectList.map(item => <img onClick={() => window.open(item.link)} key={item.icon} src={`assets/${item.icon}.png`} alt="" />)
            }
          </div>
        }
        {
          !account && <div className='wallet'>
            <div className='connect'>
              Connect Wallet
              <ul className={classNames('wallet-connect')}>
                {
                  walletList.map(item => <li className='left' key={item.name} onClick={() => handleLogin(item.connectId)}>
                    <img src={`./assets/${item.icon}.png`} />
                    <span>{item.name}</span>
                  </li>)
                }
              </ul>
            </div>
          </div>
        }
        {
          account && <div className='wallet'>
            <div className='connect'>
              {account.slice(0, 4)}...{account.slice(-6)}
              <ul className={classNames('wallet-connect')}>
                <li onClick={() => logout()}>
                  <img src="assets/exit.png" alt="" />
                  <span>Disconnect Wallet</span>
                </li>
              </ul>
            </div>
          </div>
        }
      </li>
    </ul>
  </div>
  </>
}

export default Index
