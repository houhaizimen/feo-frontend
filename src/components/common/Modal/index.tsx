import React, { ReactNode, FC } from 'react'
import { createPortal } from 'react-dom'
import { isMobile } from '@/utils/tools'
import classNames from 'classnames'

interface PropsTypes {
  show: Boolean
  onClose?: () => void
  children?: ReactNode
}

const Index: FC<PropsTypes> = ({ show = false, onClose, children }) => {
  const handleClose = () => {
    onClose?.()
  }
  return createPortal(
    <>
      {
        show && (<div className={classNames('web-modal', { pc: !isMobile() })}>
          <div className="web-modal-mask" onClick={handleClose}/>
          <div className='web-modal-wrap'>
            <div className='web-modal-wrap-close'></div>
            {children}
          </div>
        </div>)
      }
    </>
  , document.body)
}
export default Index
