import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Timeline from './components/Timeline/Timeline'
import { useSelector } from 'react-redux'
import SinglePost from './components/Timeline/SinglePost/SinglePost'
import Dashboard from './components/Dashboard/Dashboard'

const App = () => {
  const {user} = useSelector((state) => state?.auth?.user)
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/timeline' element = {<Timeline user={user}/>}/>
        <Route path = '/post/:_id' element = {<SinglePost authorId={user._id}/>}/>
        <Route path = '/dashboard' element = {<Dashboard user = {user}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App