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
            <Link className = 'nav-link'>Home</Link>
            <Link className = 'nav-link'>Videos</Link>
            <Link className = 'nav-link'>MarketPlace</Link>
        </div>
        <div>
            <Link className = 'nav-link'>Messenger</Link>
            <Link className = 'nav-link'>Notifications</Link>
            <Link className = 'nav-link'>Dashboard</Link>
        </div>
    </div>
  )
}

export default Navbar