import React, { ReactNode, FC, useEffect } from 'react'
import { createPortal } from 'react-dom'
import classNames from 'classnames'
import { isMobile } from '@/utils/tools'

interface PropsTypes {
  show: Boolean
  tip?: string
  type?: 'success' | 'error'
  onClose?: () => void
  children?: ReactNode
}

const Index: FC<PropsTypes> = ({ show = false, type = 'success', onClose, tip, children }) => {
  useEffect(() => {
    if (show) {
      setTimeout(() => {
        onClose?.()
      }, 4000)
    }
  }, [show, onClose])
  return createPortal(
    <>
      {
        show && (<div className={classNames('web-home-tips', { mobile: isMobile() })}>
          <img src={`${isMobile() ? '../' : ''}assets/tips-${type === 'success' ? '1' : '2'}.png`} alt="" />
          <span>{tip}{children}</span>
        </div>)
      }
    </>
  , document.body)
}
export default Index
