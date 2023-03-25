import React, { useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import classNames from 'classnames'
import { useScroll } from 'ahooks'
import { ConnectorNames, USER_LOCAL_CONNECT, useGetWalletList } from '@/utils/wallet'
import { connectList, LANG_LIST } from '@/config'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import { useTranslation } from 'react-i18next'
import { HEADER_CHILDREN_TYPES, HEADER_TYPES } from '@/config/types'

import { Popup } from 'antd-mobile'

const Index = () => {
  const [visible, setVisible] = useState(false)
  const [show, setShow] = useState(false)
  const [showLang, setShowLan] = useState(false)
  const { account } = useWeb3React()
  const { login, logout } = useAuth()
  const { t, i18n } = useTranslation()
  const ts: Record<string, any> = t('HEADER', { returnObjects: true })
  const walletList = useGetWalletList()
  const scroll = useScroll(document) ?? 0
  const [fixed, setFixed] = useState<boolean>(false)
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const HEADER_LIST: HEADER_TYPES[] = [
    {
      name: ts.World,
      children: [
        { name: ts.Fighter, link: '/m/gallery' }
      ]
    },
    {
      name: ts.ERA,
      children: [
        { name: ts.stake, link: '/m/stake' },
        { name: ts.epoch, link: '/m/repoch' }
      ]
    },
    {
      name: ts.Marketplace,
      children: [
        { name: ts.skin, link: '', comming: true }
      ]
    },
    {
      name: ts.doc,
      children: [
        { name: ts.FAQ, link: '/faqs' },
        { name: ts.Whitepaper, link: 'https://fighter-era-odyssey.gitbook.io/docs/' }
      ]
    }
  ]
  const [showNav, setShowNav] = useState<string>(HEADER_LIST[0].name)
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
    if (!link) return
    const reg = /https|http/
    if (reg.test(link)) {
      window.open(link)
    } else {
      navigate(link)
    }
    setVisible(false)
    setShow(false)
  }

  const handleLogout = () => {
    setVisible(false)
    setShow(false)
    logout()
  }

  const changeLanguage = (val: string) => {
    setVisible(false)
    setShowLan(false)
    void i18n.changeLanguage(val)
  }
  const handleLinkActive = (items: HEADER_CHILDREN_TYPES[]) => {
    return items.findIndex(item => item.link === pathname) > -1
  }

  const handleChangeNav = (name: string) => {
    if (name === showNav) setShowNav('')
    else setShowNav(name)
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
            HEADER_LIST.map(item => <li key={item.name} className={ classNames({ active: handleLinkActive(item.children) })}><div className='connect-wallet title-group'>
            <div className={classNames('connect-wallet-connect', { show: showNav === item.name })} onClick={() => handleChangeNav(item.name)}>
              {item.name}
              <div className='angel' />
            </div>
            <ul className={classNames('connect-wallet-list', { show: showNav === item.name })}>
              {
                item.children.map(items => <li key={items.name} onClick={() => handleLink(items.link)}>
                  {/* <img src={`../assets/${item.icon}.png`} /> */}
                  <span>{items.name}</span>
                </li>)
              }
            </ul></div>
          </li>)
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
         <div className='connect-wallet'>
            <div className={classNames('connect-wallet-connect', { show: showLang })} onClick={() => setShowLan(!showLang)}>
              <img src="../assets/icon-lang.png" alt="" />
              <div className='angel' />
            </div>
            <ul className={classNames('connect-wallet-list', { show: showLang })}>
              {
                  LANG_LIST.map(item => <li key={item.title} onClick={() => changeLanguage(item.value)}>
                  <img src={`../assets/icon-${item.icon}.png`} alt="" />
                  <span>{item.title}</span>
                </li>)
                }
            </ul>
          </div>
          <img src="/assets/icon-avatar.png" className='avatar' alt="" onClick={() => handleLink('/m/profile')}/>
      </Popup>
    </div>
  </>
}

export default Index
