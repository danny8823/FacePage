import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className = 'navbar-container'> 
        <div>
            <Link className = 'nav-link'>Logo</Link>
        </div>
        <div>
            <Link className = 'nav-link' to = '/timeline'>Home</Link>
        </div>
        <div>
            <Link className = 'nav-link' to = '/dashboard'>Dashboard</Link>
        </div>
    </div>
  )
}

export default Navbar