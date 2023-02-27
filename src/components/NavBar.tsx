import '../Nav.scss'
import { useEffect } from 'react'
import amazon from '../assets/amazon.png'
import { BsSearch } from 'react-icons/bs'
import { BsCart4 } from 'react-icons/bs'
import SelectLocation from './SelectLocation'
import SelectLanguage from './SelectLanguage'
import { RxHamburgerMenu } from 'react-icons/rx'
import Login from './Login'
import { addOption, countrySelect, showPanel, hidePanel } from './miscFunctions'

const NavBar = () => {
  useEffect(() => {
    addOption()
    countrySelect()
  }, [])

  return (
    <div className='nav-container'>
      <a
        id='top'
        href='#top'
        style={{ position: 'absolute', top: '0', opacity: '0' }}
      >
        To Top
      </a>
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
      <div className='under-nav'>
        <div className='nav-left'>
          <div className='on-hover text'>
            <RxHamburgerMenu className='all-icon' size={25} />
            All
          </div>
          <div className='on-hover text'>Today's Deals Customer Service</div>
          <div className='on-hover text'>Registry</div>
          <div className='on-hover text'>Gift Card</div>
          <div className='on-hover text'>Sell</div>
        </div>
        <div className='nav-right'>
          <div className='on-hover text float-to-right'>
            Shop great deals now
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
