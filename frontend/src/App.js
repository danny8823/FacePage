import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Timeline from './components/Timeline/Timeline'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/timeline' element = {<Timeline/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App