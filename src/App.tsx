import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
// import { useAutoConnect } from '@/hooks/useAuth'
import { useBlockNumber } from '@/hooks/useBlock'
import { useNetWork } from '@/hooks/useNetWork'
import { useChangeTitle, useLanImage } from '@/hooks/useLan'

import Web from '@/page/Web'
import Mobile from '@/page/Mobile'

function App() {
  // useAutoConnect()
  useBlockNumber()
  useNetWork()
  useChangeTitle()
  useLanImage()
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/m/*" element={<Mobile />} />
          <Route path="/*" element={<Web />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
