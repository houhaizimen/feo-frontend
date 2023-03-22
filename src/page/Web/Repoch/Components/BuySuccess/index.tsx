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
  console.log(data)
  const name: Record<string, any> = {
    CANDY: ts.Candy,
    FRAGMENT: ts.Fragment,
    SKIN: '3D SKIN NFT',
    MATERIAL: 'MATERIAL',
    NFT_BZHW: ts.MAI,
    NFT_HDS: ts.Kachou
  }
  return <Modal show={currentShow} onClose={handleClose}>
    <div className='web-buy-success'>
      <div className='left'>
        <h1 dangerouslySetInnerHTML={{ __html: ts.title }}/>
        {
          (data?.awardType === 'NFT_BZHW' || data?.awardType === 'NFT HDS') ? <h2>{name[(data?.awardType) as any]}</h2> : <h2>{name[(data?.awardType) as any]} {data?.awardType === 'FRAGMENT' ? '#' : '*'} {data?.atObtain}</h2>
        }
        {
          (data?.awardType === 'NFT_BZHW' || data?.awardType === 'NFT HDS') && <p>{ts.DESC}</p>
        }
        <div className='btn-group'>
          <Button size='small' onClick={handleClose}>{ts.start}</Button>
          <Button size='small' type='blacks' onClick={() => navigate('/profile')}>{ts.to}</Button>
        </div>
      </div>
      <img src={`/assets/GIFT/icon-${data?.imageUrl}.png`}className='right' alt="" />
    </div>
  </Modal>
}

export default Index
