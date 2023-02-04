import React from 'react'
import { useTranslation } from 'react-i18next'

const Index = () => {
  const { t } = useTranslation()
  const INVITATION_LIST: string[] = t('INVITATION.desc', { returnObjects: true })
  return <div className='m-home-invitation'>
    <h1 className='title' dangerouslySetInnerHTML={{ __html: t('INVITATION.title') }}/>
    {
      INVITATION_LIST.map(item => <p key={item}>{item}</p>)
    }
    <div className='m-home-invitation-star'>
      <img className='invitation' src="../assets/invitation.png" alt="" />
      <img className='bg' src="../assets/invitation-bg.png" alt="" />
      <img className='star-1' src="../assets/star-1.png" alt="" />
      <img className='star-2' src="../assets/star-2.png" alt="" />
      <img className='star-3' src="../assets/start-3.png" alt="" />
    </div>
  </div>
}

export default Index
