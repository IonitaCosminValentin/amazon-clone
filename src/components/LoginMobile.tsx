import React from 'react'
import { BiUser } from 'react-icons/bi'
import { IoIosArrowForward } from 'react-icons/io'

const LoginMobile = () => {
  return (
    <div className='login-container-mobile'>
      <span>Sign in</span>
      <IoIosArrowForward size={10} />
      <BiUser size={30} />
    </div>
  )
}

export default LoginMobile
