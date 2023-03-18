import React, { FC, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import ContainerBg from '@/components/common/ContainerBg'

import Button from '@/components/common/Button'

interface PropsType {
  Fragment: any
}
interface listProps {
  src: string
  sum: number
}

const Index: FC<PropsType> = ({ Fragment = [] }) => {
  const { t } = useTranslation()
  const ts: Record<string, any> = t('PROFILE.MAP', { returnObjects: true })
  const list: listProps[] = useMemo(() => [
    { src: '1', sum: 0 },
    { src: '2', sum: 0 },
    { src: '3', sum: 0 },
    { src: '4', sum: 0 },
    { src: '5', sum: 0 },
    { src: '6', sum: 0 },
    { src: '7', sum: 0 },
    { src: '8', sum: 0 },
    { src: '9', sum: 0 }
  ], [])
  const lists = useMemo(() => {
    return list.map((item: listProps) => {
      const index = Fragment.length > 0 && Fragment.findIndex((item1: any) => item1.no === item.src)
      if (index >= 0) return { ...item, sum: Fragment[index]?.num }
      else return item
    })
  }, [Fragment, list])
  // useEffect(() => {
  //   Fragment.length > 0 && Fragment.forEach((item: any) => {
  //     const index = list.findIndex((item1: listProps) => item1.src === item.no)
  //     if (index >= 0) {
  //       list[index].sum = item.num
  //     }
  //   })
  // }, [list, Fragment])
  return <div className='web-profile-map'>
    <h1 className='profile-title'>
      {ts.title}
      <div className='question'>
        <div className='question-cont'>
          <h3>{ts.how}</h3>
          {
            ts.QUESTION_LIST.map((item: any, index: number) => <ul key={index} className='question-cont-list'>
              {
                item.map((items: string) => <li key={items}>{items}</li>)
              }
            </ul>)
          }
          <p>* {ts.desc}</p>
        </div>
      </div>
    </h1>
    <ContainerBg className='web-profile-map-wrap'>
      <p>{ts.title2}<br /> {ts.title3}</p>
      <div className='web-profile-map-wrap-cont'>
        {
          lists.map((item, index) => <div key={index}>
            <img src={`assets/puzzleCard/${item.src}${item.sum > 0 ? `-${item.src}` : ''}.png`} alt="" />
            {
              item.sum > 0 && <span>{item.sum}</span>
            }
          </div>)
        }
      </div>
      <Button size='mini' disabled>{ts.synthesize}</Button>
    </ContainerBg>
  </div>
}

export default Index
