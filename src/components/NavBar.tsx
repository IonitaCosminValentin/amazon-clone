import { useEffect } from 'react'
import amazon from '../assets/amazon.png'
import { BsSearch } from 'react-icons/bs'
import { BsCart4 } from 'react-icons/bs'
import SelectLocation from './SelectLocation'
import SelectLanguage from './SelectLanguage'
import Login from './Login'
import { addOption, countrySelect, showPanel, hidePanel } from './miscFunctions'

const NavBar = () => {
  useEffect(() => {
    addOption()
    countrySelect()
  }, [])

  return (
    <div className='nav-container'>
      <div className='nav-bar'>
        <div className='nav-left'>
          <img src={amazon} alt='' className='logo' />
          <SelectLocation />
        </div>

        <div className='search-form'>
          <div className='option-container'></div>
          <input type='text' placeholder='Search Amazon' />
          <button>
            <BsSearch />
          </button>
        </div>

        <div className='nav-right'>
          <div className='darker-background'></div>

          <SelectLanguage showPanel={showPanel} hidePanel={hidePanel} />

          <Login showPanel={showPanel} hidePanel={hidePanel} />

          <div className='returns-and-orders on-hover'>
            Returns <br />
            <span id='highlight'>& Orders</span>
          </div>

          <div id='highlight' className='cart on-hover'>
            <BsCart4 id='cart-icon' />
            Cart
          </div>
        </div>
      </div>
      <div className='under-nav'></div>
    </div>
  )
}

export default NavBar
