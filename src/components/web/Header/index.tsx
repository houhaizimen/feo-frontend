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
  console.log(account)
  const { login, logout } = useAuth()
  console.log(logout)
  const scroll = useScroll(document) ?? 0
  const [fixed, setFixed] = useState<boolean>(false)
  // const [show, setShow] = useState<boolean>(false)
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const walletList = [
    {
      name: 'Metamask',
      icon: 'metamask',
      connectId: ConnectorNames.Injected
    }
  ]
  console.log(walletList)
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
  console.log(handleLogin)
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
      <li className='left'><img src='assets/logo.png' alt="" /></li>
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
              connectList.map(item => <img key={item.icon} src={`assets/${item.icon}.png`} alt="" />)
            }
          </div>
        }
        <div className='connect'>Connect Wallet</div>
      </li>
    </ul>
  </div>
  </>
}

export default Index
