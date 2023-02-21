import React from 'react'
import { useTranslation } from 'react-i18next'

const Index = () => {
  const { t } = useTranslation()
  const NFT_HOLDERS_LIST: Record<string, any> = t('NFTHOLDER.NFT_HOLDERS_LIST', { returnObjects: true })
  return <div className='web-home-nft-holders'>
    <h1 className='title' dangerouslySetInnerHTML={{ __html: t('NFTHOLDER.title', { symbol: '<br />' }) }}/>
    <div className='web-home-nft-holders-wrap'>
      {
        NFT_HOLDERS_LIST.map((item: any) => <ul key={item.title}>
          <li><img src={`assets/nftHolder/${item.icon}.png`} alt="" /></li>
          <li>
            <dt>{item.title}</dt>
            <dd>{item.desc}</dd>
          </li>
        </ul>)
      }
    </div>
    <img className='web-home-nft-holders-person' src="./assets/nft-holders-right.png" alt="" />
  </div>
}

export default Index
