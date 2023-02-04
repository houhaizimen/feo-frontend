import React, { useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import classNames from 'classnames'
import { useScroll } from 'ahooks'
import { ConnectorNames, USER_LOCAL_CONNECT, useGetWalletList } from '@/utils/wallet'
import { connectList } from '@/config'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import { useTranslation } from 'react-i18next'

import { Popup } from 'antd-mobile'

const Index = () => {
  const [visible, setVisible] = useState(false)
  const [show, setShow] = useState(false)
  const { account } = useWeb3React()
  const { login, logout } = useAuth()
  const { t, i18n } = useTranslation()
  const ts: Record<string, any> = t('HEADER', { returnObjects: true })
  const walletList = useGetWalletList()
  const scroll = useScroll(document) ?? 0
  const [fixed, setFixed] = useState<boolean>(false)
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const HEADER_LIST = [
    { name: ts.World, link: '/m/' },
    { name: ts.Fighter, link: '/m/gallery' },
    { name: ts.FAQ, link: '/m/faqs' }
  ]
  const handleLogin = async (connector: ConnectorNames) => {
    const { key } = USER_LOCAL_CONNECT
    localStorage.setItem(key, connector)
    await login(connector)
    setVisible(false)
    setShow(false)
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
    setVisible(false)
    setShow(false)
    navigate(link)
  }

  const handleLogout = () => {
    setVisible(false)
    setShow(false)
    logout()
  }

  const changeLanguage = (val: string) => {
    void i18n.changeLanguage(val)
  }

  return <>
    <div className={ classNames('m-home-header', { fixed })}>
      <ul className='cont'>
        <li className='left' onClick={() => handleLink('/m/')}><img src='../assets/logo.png' alt="" /></li>
        <li className='right'>
          {
            connectList.map(item => <img onClick={() => window.open(item.link)} key={item.icon} src={`../assets/${item.icon}.png`} alt="" />)
          }
          <img src={`../assets/m/icon-${visible ? 'close' : 'open'}.png`} onClick={() => setVisible(!visible)} className='open'/>
        </li>
      </ul>
      <Popup
        visible={visible}
        mask={false}
        position='right'
        bodyClassName='m-home-header-popup'
        bodyStyle={{ width: '60vw' }}
      >
        <ul className='title'>
          {
            HEADER_LIST.map(item => <li key={item.name} className={ classNames({ active: pathname === item.link })} onClick={() => handleLink(item.link)}>{item.name}</li>)
          }
        </ul>
        {
          !account && <div className='connect-wallet'>
            <div className={classNames('connect-wallet-connect', { show })} onClick={() => setShow(!show)}>
              {ts.Connect}
              <div className='angel' />
            </div>
            <ul className={classNames('connect-wallet-list', { show })}>
              {
                walletList.map(item => <li key={item.name} onClick={() => handleLogin(item.connectId)}>
                  <img src={`../assets/${item.icon}.png`} />
                  <span>{item.name}</span>
                </li>)
              }
            </ul>
          </div>
        }
        {
          account && <div className='connect-wallet'>
            <div className={classNames('connect-wallet-connect', { show })} onClick={() => setShow(!show)}>
              <div className='account'>
                <img className='icon' src="../assets/icon-account.png" alt="" />
                {account?.slice(0, 4)}...{account?.slice(-6)}
              </div>
              <div className='angel' />
            </div>
            <ul className={classNames('connect-wallet-list', { show })}>
               <li onClick={handleLogout}>
                  <img className='logout' src='../assets/icon-dismiss.png' />
                  <span>{ts.Disconnect}</span>
                </li>
            </ul>
          </div>
        }
      </Popup>
    </div>
  </>
}

export default Index
