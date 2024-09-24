import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Timeline from './components/Timeline/Timeline'
import { useSelector } from 'react-redux'

const App = () => {
  const {user} = useSelector((state) => state?.auth?.user)

  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/timeline' element = {<Timeline user={user}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App