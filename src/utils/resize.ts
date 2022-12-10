import { useRef } from 'react'

export default function useWindowResize() {
 // * 指向最外层容器
 const screenRef = useRef<any>(document.body)
 // * 定时函数
 const timer = useRef(0)
 // * 默认缩放值
 const scale = {
  width: '1',
  height: '1'
 }
 // * 设计稿尺寸（px）
 const baseWidth = 1920
 const baseHeight = 1080

 // * 需保持的比例（默认1.77778）
 const baseProportion = parseFloat((baseWidth / baseHeight).toFixed(5))
 const calcRate = () => {
  // 当前宽高比
  const currentRate = parseFloat(
   (window.innerWidth / window.innerHeight).toFixed(5)
  )
  if (screenRef.current) {
   if (currentRate > baseProportion) {
    // 表示更宽
    scale.width = (
     (window.innerHeight * baseProportion) /
     baseWidth
    ).toFixed(5)
    scale.height = (window.innerHeight / baseHeight).toFixed(5)
    screenRef.current.style.transform = `scale(${scale.width}, ${scale.height})`
   } else {
    // 表示更高
    scale.height = (
     window.innerWidth /
     baseProportion /
     baseHeight
    ).toFixed(5)
    scale.width = (window.innerWidth / baseWidth).toFixed(5)
    screenRef.current.style.transform = `scale(${scale.width}, ${scale.height})`
   }
  }
 }

 const resize = () => {
  clearTimeout(timer.current)
  timer.current = window.setTimeout(() => {
   calcRate()
  }, 200)
 }

 // 改变窗口大小重新绘制
 const windowDraw = () => {
  window.addEventListener('resize', resize)
 }

 // 改变窗口大小重新绘制
 const unWindowDraw = () => {
  window.removeEventListener('resize', resize)
 }

 return {
  screenRef,
  calcRate,
  windowDraw,
  unWindowDraw
 }
}
