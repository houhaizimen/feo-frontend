import React, { useState, FC } from 'react'

import Modal from '@/components/common/Modal'
import Button from '@/components/common/Button'

interface PropsTypes {
  show: Boolean
  onClose?: () => void
}

const Index: FC<PropsTypes> = ({ show, onClose }) => {
  const [currentShow, setCurrentShow] = useState<Boolean>(show)
  const handleClose = () => {
    onClose?.()
    setCurrentShow(false)
  }
  return <Modal show={currentShow}>
    <div className='web-buy-success'>
      <div className='left'>
        <h1>Congratulations！ <br />You’ve Got</h1>
        <h2>XXXXXXXXX!</h2>
        <div className='btn-group'>
          <Button size='medium' onClick={handleClose}>Start again</Button>
          <Button size='medium' type='blacks' onClick={() => setCurrentShow(false)}>To package</Button>
        </div>
      </div>
      <img src="assets/card/1.png" className='right' alt="" />
    </div>
  </Modal>
}

export default Index
