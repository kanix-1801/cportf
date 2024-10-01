import React from 'react'
import './Styles/header.css'
import Link from 'next/link'
const Header = () => {
  return (
    <div className='header'>
      <div className='logo'><Link href="Carnival">Utsav360</Link></div>
      <nav className='nav'>
        <ul>
          <Link href="Carnival" className='nav-item'>Carnivals</Link>
          <Link href="Events" className='nav-item'>Events</Link>
          <Link href="Discover" className='nav-item'>Discover</Link>
        </ul>
      </nav>
    </div>
  )
}

export default Header