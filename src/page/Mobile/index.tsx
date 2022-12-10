import React, { lazy } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

const Home = lazy(async () => await import('./Home'))
const Come = lazy(async () => await import('./Come'))
const FAQS = lazy(async () => await import('./FAQS'))
const Terms = lazy(async () => await import('./Terms'))
const Word = lazy(async () => await import('./Word'))

function Index () {
  const { pathname } = useLocation()
  return (
    <div className="m-home">
      <Routes>
        <Route path={`${pathname}`} element={<Home />} />
        <Route path={`${pathname}/come`} element={<Come />} />
        <Route path={`${pathname}/faqs`} element={<FAQS />} />
        <Route path={`${pathname}/terms`} element={<Terms />} />
        <Route path={`${pathname}/word`} element={<Word />} />
      </Routes>
    </div>
  )
}

export default Index
