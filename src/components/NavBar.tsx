import React from 'react'
import amazon from '../assets/amazon.png'

const NavBar = () => {
  return (
    <div className='nav-bar'>
      <div className='nav-left'>
        <img src={amazon} alt='' className='logo' />
      </div>
    </div>
  )
}

export default NavBar
