import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '@/components/mobile/Header'

const Home = lazy(async () => await import('./Home'))
const Gallery = lazy(async () => await import('./Gallery'))
const FAQS = lazy(async () => await import('./FAQS'))
const Terms = lazy(async () => await import('./Terms'))
const Stake = lazy(async () => await import('./Stake'))
const Repoch = lazy(async () => await import('./Repoch'))
const Profile = lazy(async () => await import('./Profile'))

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
          <Route path='/stake' element={<Stake />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/repoch' element={<Repoch />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default Index
