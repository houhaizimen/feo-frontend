import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '@/components/web/Header'
// import { getMerkleTree } from '@/utils/merkletree'

const Home = lazy(async () => await import('./Home'))
const FAQS = lazy(async () => await import('./FAQS'))
const Terms = lazy(async () => await import('./Terms'))
const Gallery = lazy(async () => await import('./Gallery'))
const Stake = lazy(async () => await import('./Stake'))
const Repoch = lazy(async () => await import('./Repoch'))
const Profile = lazy(async () => await import('./Profile'))

function Index () {
  // getMerkleTree('0xC865d620890a8625a9B5dD52034d8D70D1fB48f1')
  return (
    <div className='web-app'>
      <Header />
      <Suspense fallback={<></>}>
        <Routes>
          <Route path='/faqs' element={<FAQS />} />
          <Route path='/terms' element={<Terms />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/stake' element={<Stake />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/repoch' element={<Repoch />} />
          <Route path='/' element={<Home />}/>
        </Routes>
      </Suspense>
    </div>
  )
}

export default Index
