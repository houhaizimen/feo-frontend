import React from 'react'

const Index = () => {
  return <div className='web-home-raod-map'>
    {/* <div className='web-home-raod-map-header'>
      <img src="./assets/road-map-text.png" alt="" />
      <span>Roadmap</span>
      <img src="./assets/road-map-text.png" alt="" />
      <img src="./assets/road-map-text.png" alt="" />
      <img src="./assets/road-map-text.png" alt="" />
    </div> */}
    <div className='cont'>
      <img src={`assets/road-map${window.imgLang}.png`} alt="" />
    </div>
  </div>
}

export default Index
