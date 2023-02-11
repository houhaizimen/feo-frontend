import React, { useEffect, useState } from 'react'
import { useScroll } from 'ahooks'
import { connectList } from '@/config'

const Index = () => {
  const scroll = useScroll(document) ?? 0
  const [show, setShow] = useState<boolean>(true)
  useEffect(() => {
    const { top } = scroll as any
    const dom = document.querySelector('.web-home-footer') as HTMLDivElement
    const ch: number = document.documentElement.clientHeight ?? 0
    const domh: number = dom?.clientHeight ?? 0
    const sh: number = document.body?.scrollHeight ?? 0
    if (ch + Number(top) + domh >= sh) setShow(false)
    else setShow(true)
  }, [scroll])
  return <>
    {
      <div className='web-connect-icon'>
        {
          show && connectList.map(item => <img onClick={() => window.open(item.link)} key={item.icon} src={`assets/${item.icon}.png`} alt="" />)
        }
      </div>
    }
  </>
}

export default Index
