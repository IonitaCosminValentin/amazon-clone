import React from 'react'

const GamingAccessories = () => {
  return (
    <div className='gaming-accessories'>
      <h3>Gaming accessories</h3>
      <div className='gaming-accessories-container'>
        <div>
          <img
            src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg'
            alt=''
          />
          Headsets
        </div>
        <div>
          <img
            src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg'
            alt=''
          />
          Keyboards
        </div>
        <div>
          <img
            src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg'
            alt=''
          />
          Computer mice
        </div>
        <div>
          <img
            src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg'
            alt=''
          />
          Chairs
        </div>
      </div>
      <a href='/'>See more</a>
    </div>
  )
}

export default GamingAccessories
