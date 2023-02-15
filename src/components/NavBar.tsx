import React from 'react'
import amazon from '../assets/amazon.png'
import { HiOutlineLocationMarker } from 'react-icons/hi'

const NavBar = () => {
  return (
    <div className='nav-container'>
      <div className='nav-bar'>
        <div className='nav-left'>
          <img src={amazon} alt='' className='logo' />
          <div className='deliver-div'>
            <div id='location-icon-container'>
              <HiOutlineLocationMarker id='location-icon' />
            </div>
            <div>
              Deliver to <span>Romania</span>
            </div>
          </div>
        </div>
        <div className='search-form'>
          <option></option>
          <input type='text' />
          <button></button>
        </div>
      </div>
      <div className='under-nav'></div>
    </div>
  )
}

export default NavBar
