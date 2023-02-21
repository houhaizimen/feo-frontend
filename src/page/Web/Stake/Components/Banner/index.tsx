import React from 'react'
import { useTranslation } from 'react-i18next'

const Index = () => {
  const { t } = useTranslation()
  const ts: Record<string, any> = t('STAKE.BANNER', { returnObjects: true })
  return <div className='web-stake-banner'>
    <h1 dangerouslySetInnerHTML={{ __html: ts.title }}/>
    <div>
      <p>{ts.desc}</p>
      <i onClick={() => window.open('https://fighter-era-odyssey.gitbook.io/docs/')}>{ts.see}</i>
    </div>
  </div>
}

export default Index
