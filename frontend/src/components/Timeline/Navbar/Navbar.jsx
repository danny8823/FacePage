import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'
import {useDispatch} from 'react-redux'
import { logoutAction } from '../../../redux/slice/authSlice'
import { Button } from 'react-bootstrap'
const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const logoutHandler = () => {
    dispatch(logoutAction())
    localStorage.removeItem('userInfo')
    navigate('/')
  }
  
  return (
    <div className = 'navbar-container'> 
        <div>
            <Link className = 'nav-link'>Logo</Link>
        </div>
        <div>
            <Link className = 'nav-link' to = '/timeline'>Home</Link>
            <Button className = 'nav-link' onClick = {()=>logoutHandler()}>Logout</Button>
        </div>
        <div>
            <Link className = 'nav-link' to = '/dashboard'>Dashboard</Link>
        </div>
    </div>
  )
}

export default Navbar