import React, { useState } from 'react'
import { connectList } from '@/config'
import { useTranslation } from 'react-i18next'
import ContainerBg from '@/components/common/ContainerBg'
import Button from '@/components/common/Button'

const Index = () => {
  const { t } = useTranslation()
  const ts: Record<string, any> = t('PROFILE.MYNFT', { returnObjects: true })
  const [NFTList, setNFTList] = useState<string[]>([])
  console.log(setNFTList)
  return <div className='web-profile-my-nft'>
    <h1 className='profile-title'>{ts.title}</h1>
    <ContainerBg className='web-profile-my-nft-wrap'>
      {
        NFTList.length === 0 && <p>{ts.desc}</p>
      }
      {
        <div className='card-list'>
        {
          NFTList.map(item => <div className='card'>
            <p>1111111111111111</p>
            <img src={`assets/card/${item}.png`} alt="" />
          </div>)
        }
      </div>
      }
      {
        NFTList.length === 0 && <Button size='medium' onClick={() => window.open(connectList[0].link)}>{ts.to}</Button>
      }
    </ContainerBg>
  </div>
}

export default Index
