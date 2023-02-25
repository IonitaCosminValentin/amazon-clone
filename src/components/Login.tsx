import { IoMdArrowDropdown } from 'react-icons/io'

const Login = ({
  showPanel,
  hidePanel
}: {
  showPanel: Function
  hidePanel: Function
}) => {
  return (
    <div
      className='login-container on-hover'
      onMouseEnter={e => {
        showPanel(e.currentTarget.children[0])
      }}
      onMouseLeave={e => {
        hidePanel(e.currentTarget.children[0])
      }}
    >
      <div className='opened'>
        <div className='top-side'>
          <button>Sign In</button>
          <div>
            New customer?<a href='/'>Start here.</a>
          </div>
        </div>
        <div className='container'>
          <div className='left-side'>
            <h3>Your Lists</h3>
            <span>Create a list</span>
            <span>Find a List or Registry</span>
          </div>
          <div className='right-side'>
            <h3>Your Account</h3>
            <span>
              Account <br />
            </span>
            <span>
              Orders <br />
            </span>
            <span>
              Recomandations <br />
            </span>
            <span>
              Browsing History <br />
            </span>
            <span>
              WatchList <br />
            </span>
            <span>
              Video Purchases & Rentals <br />
            </span>
            <span>
              Kindle Unlimited <br />
            </span>
            <span>
              Content & Devices <br />
            </span>
            <span>
              Subscribe & Save Items <br />
            </span>
            <span>
              Memberships & Subscriptions <br />
            </span>
            <span>
              Music Library <br />
            </span>
            <br />
          </div>
        </div>
      </div>
      <div className='login'>
        Hello, sign in <br />
        <span id='highlight'>Account & Lists</span>
      </div>
      <IoMdArrowDropdown id='arrow' />
    </div>
  )
}

export default Login
