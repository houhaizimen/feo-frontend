import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '@/components/web/Header'

const Home = lazy(async () => await import('./Home'))
const FAQS = lazy(async () => await import('./FAQS'))
const Terms = lazy(async () => await import('./Terms'))
const Gallery = lazy(async () => await import('./Gallery'))

function Index () {
  return (
    <div className='web-app'>
      <Header />
      <Suspense fallback={<></>}>
        <Routes>
          <Route path='/faqs' element={<FAQS />} />
          <Route path='/terms' element={<Terms />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/' element={<Home />}/>
        </Routes>
      </Suspense>
    </div>
  )
}

export default Index
