import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import { Archive } from './pages/Archive'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/archive' element={<Archive />}></Route>
      {/* <Route path='/' element={<Home />}></Route>
      <Route path='/' element={<Home />}></Route> */}
    </Routes>
  )
}

export default App
