import '../Footer.scss'
import amazon from '../assets/amazon.png'
import usaFlag from '../assets/usaFlag.png'
import { CiGlobe } from 'react-icons/ci'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='top-side'>
        <a href='#top'>Back to top</a>
      </div>
      <div className='middle'>
        <div className='left-side'>
          <h3>Get to Know Us</h3>
          <br />
          Careers <br />
          Blog <br />
          About Amazon <br />
          Investor Relations <br />
          Amazon Devices <br />
          Amazon Science <br />
        </div>
        <div className='middle1'>
          <h3>Make Money with Us</h3>
          <br />
          Sell products on Amazon <br />
          Sell on Amazon Business <br />
          Sell Apps on Amazon <br />
          Become an Affiliate <br />
          Advertise Your Products <br />
          Self-Publish with Us <br />
          Host an Amazon Hub <br />
          See More Make Money With Us <br />
        </div>
        <div className='middle2'>
          <h3>Amazon Payment Products</h3>
          <br />
          Amazon Business Card <br />
          Shop with Points <br />
          Reload Your Balance <br />
          Amazon Curency Converter <br />
        </div>
        <div className='right-side'>
          <h3>Let Us Help You</h3>
          <br />
          Amazon and COVID-19 <br />
          Your Account <br />
          Your Orders <br />
          Shipping Rates & Polices <br />
          Returns & Replacements <br />
          Manage Your Content and Devices <br />
          Amazon Assistant <br />
          Help <br />
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
