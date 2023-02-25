import { HiOutlineLocationMarker } from 'react-icons/hi'

const SelectLocation = () => {
  return (
    <div className='deliver-div on-hover'>
      <div
        className='container'
        onClick={e => {
          let element: any = e.currentTarget.parentElement?.childNodes[1]
          element.style = 'display:initial;'
        }}
      >
        <div id='location-icon-container'>
          <HiOutlineLocationMarker id='location-icon' />
        </div>
        <div>
          Deliver to <br />
          <span id='highlight'>Romania</span>
        </div>
      </div>
      <div
        className='opened-container'
        onClick={e => {
          let element: any = e.currentTarget
          if (e.currentTarget === e.target) element.style = ''
        }}
      >
        <div className='opened'>
          <header>Choose your location</header>

          <span>
            Delivery options and delivery speeds may vary for different
            locations
          </span>
          <button>Sign in to see your adresses</button>
          <div className='divider'>
            <span>or enter a US zip code</span>
          </div>
          <div className='zip-code-form'>
            <input type='text' />
            <button>Apply</button>
          </div>
          <div className='divider'>
            <span>or</span>
          </div>
          <div>
            <select id='select-country'></select>
          </div>
          <button id='done'>Done</button>
        </div>
      </div>
    </div>
  )
}

export default SelectLocation
