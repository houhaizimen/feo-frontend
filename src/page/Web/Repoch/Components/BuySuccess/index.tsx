import React, { useState, FC, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import Modal from '@/components/common/Modal'
import Button from '@/components/common/Button'

interface PropsTypes {
  show: Boolean
  onClose?: () => void
  data: any
}

const Index: FC<PropsTypes> = ({ show, onClose, data }) => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const ts: Record<string, any> = t('REPOCH.SUCCESS_MODAL', { returnObjects: true })
  const [currentShow, setCurrentShow] = useState<Boolean>(false)
  const handleClose = () => {
    onClose?.()
    setCurrentShow(false)
  }
  useEffect(() => setCurrentShow(show), [show])
  return <Modal show={currentShow} onClose={handleClose}>
    <div className='web-buy-success'>
      <div className='left'>
        <h1 dangerouslySetInnerHTML={{ __html: ts.title }}/>
        <h2>{data?.awardContent}!</h2>
        <div className='btn-group'>
          <Button size='medium' onClick={handleClose}>{ts.start}</Button>
          <Button size='medium' type='blacks' onClick={() => navigate('/profile')}>{ts.to}</Button>
        </div>
      </div>
      <img src={`/assets/GIFT/card-${data?.imageUrl}.png`}className='right' alt="" />
    </div>
  </Modal>
}

export default Index
