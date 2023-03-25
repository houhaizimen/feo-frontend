import React, { ReactNode, FC, useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { isMobile } from '@/utils/tools'
import classNames from 'classnames'

interface PropsTypes {
  show: Boolean
  onClose?: () => void
  children?: ReactNode
}

const Index: FC<PropsTypes> = ({ show = false, onClose, children }) => {
  const [currentShow, setCurrentShow] = useState<Boolean>(false)
  useEffect(() => setCurrentShow(show), [show])
  const handleClose = () => {
    onClose?.()
    setCurrentShow(false)
  }
  return createPortal(
    <>
      {
        currentShow && (<div className={classNames('web-modal', { mobile: isMobile() })}>
          <div className="web-modal-mask" onClick={handleClose}/>
          <div className='web-modal-wrap'>
            <div className='web-modal-wrap-close' onClick={handleClose}></div>
            {children}
          </div>
        </div>)
      }
    </>
  , document.body)
}
export default Index
