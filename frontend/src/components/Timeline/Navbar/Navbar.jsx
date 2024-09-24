import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className = 'navbar-container'> 
        <div>
            <Link>Logo</Link>
        </div>
        <div>
            <Link>Home</Link>
            <Link>Videos</Link>
            <Link>MarketPlace</Link>
        </div>
        <div>
            <Link>Messenger</Link>
            <Link>Notifications</Link>
            <Link>Dashboard</Link>
        </div>
    </div>
  )
}

export default Navbar