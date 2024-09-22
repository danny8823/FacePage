import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App