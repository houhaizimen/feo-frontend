import React, { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

const Home = lazy(async () => await import('./Home'))
const Gallery = lazy(async () => await import('./Gallery'))
const FAQS = lazy(async () => await import('./FAQS'))
const Terms = lazy(async () => await import('./Terms'))

function Index () {
  return (
    <div className="m-app">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/faqs' element={<FAQS />} />
        <Route path='/terms' element={<Terms />} />
      </Routes>
    </div>
  )
}

export default Index
