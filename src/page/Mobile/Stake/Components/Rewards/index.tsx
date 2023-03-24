import React from 'react'
import { useTranslation } from 'react-i18next'

const Index = () => {
  const { t } = useTranslation()
  const ts: Record<string, any> = t('STAKE.REWARDS', { returnObjects: true })
  return <div className='m-stake-rewards'>
    <header>
      <div className='top'>
        <h1 className='title'>{ts.title}</h1>
        {
          ts.REWARDS_LIST.map((item: string) => <p key={item}>{item}</p>)
        }
      </div>
      <img src="/assets/stake/stake-person.png" className='bottom' alt="" />
    </header>
    <footer>
      {
        ts.CONFIG_LIST.map((item: any) => <ul key={item[0]}>
          {
            item.map((item1: string) => <li key={item1}>{item1}</li>)
          }
        </ul>)
      }
      <p>{ts.desc}</p>
    </footer>
  </div>
}

export default Index
