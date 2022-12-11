import React, { FC, ReactNode } from 'react'
import classNames from 'classnames'
import { isMobile } from '@/utils/tools'

interface PropsType {
  size?: 'mini' | 'small' | 'large'
  type?: 'border' | 'default'
  loading?: boolean
  disabled?: boolean
  onClick?: () => void
  children: ReactNode
}
const Index: FC<PropsType> = ({ size = 'small', loading = false, disabled = false, onClick, type, children }) => {
  const handleClick = () => {
    if (disabled) return
    onClick?.()
  }
  const url = isMobile() ? '../assets/load.png' : 'assets/load.png'
  return <button className={classNames('web-button', size, type, { disabled, mobile: isMobile() })} onClick={handleClick}>
    {
      loading && <div className='loading-wrap'>
       <img src={url} alt="" />
      </div>
    }
    {
      !loading && children
    }
  </button>
}

export default Index
