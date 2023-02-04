import React, { useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import classNames from 'classnames'
import { useScroll } from 'ahooks'
import { ConnectorNames, USER_LOCAL_CONNECT, useGetWalletList } from '@/utils/wallet'
import { connectList, LANG_LIST } from '@/config'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import { useTranslation } from 'react-i18next'

const Index = () => {
  const { account } = useWeb3React()
  const { login, logout } = useAuth()
  const { t, i18n } = useTranslation()
  const ts: Record<string, any> = t('HEADER', { returnObjects: true })
  const walletList = useGetWalletList()
  const scroll = useScroll(document) ?? 0
  const [fixed, setFixed] = useState<boolean>(false)
  const [rotate, setRotate] = useState<boolean>(false)
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const HEADER_LIST = [
    { name: ts.World, link: '/' },
    { name: ts.Fighter, link: '/gallery' },
    { name: ts.FAQ, link: '/faqs' }
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

  const changeLanguage = (val: string) => {
    void i18n.changeLanguage(val)
  }

  return <>
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
              connectList.slice(0, 3).map(item => <img onClick={() => window.open(item.link)} key={item.icon} src={`assets/${item.icon}.png`} alt="" />)
            }
          </div>
        }
        {
          <div className='lang'>
            <div className='lang-cont'>
              <div className={classNames('lang-cont-top', { down: rotate })} onClick={() => setRotate(!rotate)}>
                <img src="assets/icon-lang.png" alt="" />
                <img src="assets/icon-up.png" alt="" />
              </div>
              <div className='lang-cont-bottom'>
                {
                  LANG_LIST.map(item => <div key={item.value} onClick={() => changeLanguage(item.value)}>
                    <img src={`assets/icon-${item.icon}.png`} alt="" />
                    <span>{item.title}</span>
                  </div>)
                }
              </div>
            </div>
          </div>
        }
        {
          !account && <div className='wallet'>
            <div className='connect'>
              {ts.Connect}
            </div>
            <ul className={classNames('wallet-connect')}>
                {
                  walletList.map(item => <li className='left' key={item.name} onClick={() => handleLogin(item.connectId)}>
                    <img src={`./assets/${item.icon}.png`} />
                    <span>{item.name}</span>
                  </li>)
                }
              </ul>
          </div>
        }
        {
          account && <div className='wallet'>
            <div className='connect'>
              <img className='icon' src="assets/icon-account.png" alt="" />
              {account.slice(0, 4)}...{account.slice(-6)}
            </div>
            <ul className={classNames('wallet-connect logout')}>
              <li onClick={() => logout()}>
                <img className='icon' src="assets/icon-dismiss.png" alt="" />
                <span>{ts.Disconnect}</span>
              </li>
            </ul>
          </div>
        }
      </li>
    </ul>
  </div>
  </>
}

export default Index
