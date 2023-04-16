import '../Footer.scss'
import amazon from '../assets/amazon.png'
import usaFlag from '../assets/usaFlag.png'
import { CiGlobe } from 'react-icons/ci'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='top-side'>
        <span
          onClick={() => {
            document.querySelector('#top')?.scrollIntoView()
          }}
        >
          Back to top
        </span>
      </div>
      <div className='middle'>
        <div className='left-side'>
          <h3>Get to Know Us</h3>
          <br />
          <span>Careers</span>
          <br />
          <span> Blog</span>
          <br />
          <span> About Amazon </span>
          <br />
          <span>Investor Relations</span>
          <br />
          <span>Amazon Devices </span>
          <br />
          <span> Amazon Science </span>
          <br />
        </div>
        <div className='middle1'>
          <h3>Make Money with Us</h3>
          <br />
          <span>Sell products on Amazon</span>
          <br />
          <span>Sell on Amazon Business </span>
          <br />
          <span>Sell Apps on Amazon</span>
          <br />
          <span>Become an Affiliate</span>
          <br />
          <span>Advertise Your Products</span>
          <br />
          <span> Self-Publish with Us</span>
          <br />
          <span>Host an Amazon Hub </span>
          <br />
          <span>See More Make Money With Us</span> <br />
        </div>
        <div className='middle2'>
          <h3>Amazon Payment Products</h3>
          <br />
          <span>Amazon Business Card</span>
          <br />
          <span>Shop with Points </span>
          <br />
          <span>Reload Your Balance</span> <br />
          <span>Amazon Curency Converter</span> <br />
        </div>
        <div className='right-side'>
          <h3>Let Us Help You</h3>
          <br />
          <span>Amazon and COVID-19</span>
          <br />
          <span>Your Account </span>
          <br />
          <span>Your Orders</span>
          <br />
          <span>Shipping Rates & Polices </span>
          <br />
          <span>Returns & Replacements</span>
          <br />
          <span>Manage Your Content and Devices</span>
          <br />
          <span>Amazon Assistant</span> <br />
          <span>Help</span> <br />
        </div>
      </div>

      <div className='divider'></div>

      <div className='bottom-side'>
        <img src={amazon} alt='' id='logo' />
        <div className='highlight'>
          <CiGlobe size={20} />
          English
        </div>
        <div className='highlight'>$ USD - U.S. Dollar</div>
        <div className='highlight usa'>
          <img src={usaFlag} alt='' id='usa-flag' />
          United States
        </div>
      </div>
    </div>
  )
}

export default Footer
