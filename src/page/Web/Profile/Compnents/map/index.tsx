import React from 'react'
import ContainerBg from '@/components/common/ContainerBg'

const Index = () => {
  const list = [
    { src: '1', sum: 0 },
    { src: '2', sum: 0 },
    { src: '3', sum: 0 },
    { src: '4', sum: 0 },
    { src: '5', sum: 0 },
    { src: '6', sum: 0 },
    { src: '7', sum: 0 },
    { src: '8', sum: 0 },
    { src: '9', sum: 0 }
  ]
  return <div className='web-profile-map'>
    <h1 className='profile-title'>Fragments of treasure map</h1>
    <ContainerBg className='web-profile-map-wrap'>
      <div className='web-profile-map-wrap-cont'>
        {
          list.map(item => <div key={item.src}>
            <img src={`assets/puzzleCard/${item.src}.png`} alt="" />
            {
              item.sum > 0 && <span>{item.sum}</span>
            }
          </div>)
        }
      </div>
    </ContainerBg>
  </div>
}

export default Index
