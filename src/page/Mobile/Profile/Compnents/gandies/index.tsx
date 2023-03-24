import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import Button from '@/components/common/Button'

interface PropsType {
  Profile: any
}

const Index: FC<PropsType> = ({ Profile = {} }) => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const ts: Record<string, any> = t('PROFILE.GANDIES', { returnObjects: true })
  return <div className='web-profile-gendies'>
    <div className='left'>
      <h1 className='profile-title'>{ts.title}</h1>
      <dl>
        <dt>{ts.num} <span>{Profile?.candyBalance ?? 0}</span></dt>
        <dd>{ts.yied} <span>{Profile?.yieldCandyBalance ?? 0}</span></dd>
      </dl>
    </div>
    <Button size='mini' onClick={() => navigate('/repoch')}>{ts.to}</Button>
  </div>
}

export default Index
