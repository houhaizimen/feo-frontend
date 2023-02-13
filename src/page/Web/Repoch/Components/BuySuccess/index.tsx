import React, { useState, FC } from 'react'
import { useTranslation } from 'react-i18next'

import Modal from '@/components/common/Modal'
import Button from '@/components/common/Button'

interface PropsTypes {
  show: Boolean
  onClose?: () => void
}

const Index: FC<PropsTypes> = ({ show, onClose }) => {
  const { t } = useTranslation()
  const ts: Record<string, any> = t('REPOCH.SUCCESS_MODAL', { returnObjects: true })
  const [currentShow, setCurrentShow] = useState<Boolean>(show)
  const handleClose = () => {
    onClose?.()
    setCurrentShow(false)
  }
  return <Modal show={currentShow}>
    <div className='web-buy-success'>
      <div className='left'>
        <h1 dangerouslySetInnerHTML={{ __html: ts.title }}/>
        <h2>XXXXXXXXX!</h2>
        <div className='btn-group'>
          <Button size='medium' onClick={handleClose}>{ts.start}</Button>
          <Button size='medium' type='blacks' onClick={() => setCurrentShow(false)}>{ts.to}</Button>
        </div>
      </div>
      <img src="assets/card/1.png" className='right' alt="" />
    </div>
  </Modal>
}

export default Index
