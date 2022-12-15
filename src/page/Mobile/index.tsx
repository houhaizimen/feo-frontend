import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '@/components/mobile/Header'

const Home = lazy(async () => await import('./Home'))
const Gallery = lazy(async () => await import('./Gallery'))
const FAQS = lazy(async () => await import('./FAQS'))
const Terms = lazy(async () => await import('./Terms'))

function Index () {
  return (
    <div className="m-app">
      <Header />
      <Suspense fallback={<></>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/faqs' element={<FAQS />} />
          <Route path='/terms' element={<Terms />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default Index
