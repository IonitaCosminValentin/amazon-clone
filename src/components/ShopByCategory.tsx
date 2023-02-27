import React from 'react'

const ShopByCategory = () => {
  return (
    <div className='gaming-accessories  cat'>
      <h3>Shop by Category</h3>
      <div className='gaming-accessories-container'>
        <div>
          <img
            src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/computer120x._SY85_CB468850970_.jpg'
            alt=''
          />
          Computers & Accessories
        </div>
        <div>
          <img
            src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/August/DashboardCard/PS4_120X._SY85_CB438749318_.jpg'
            alt=''
          />
          Video Games
        </div>
        <div>
          <img
            src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Baby120X._SY85_CB468850882_.jpg'
            alt=''
          />
          Baby
        </div>
        <div>
          <img
            src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Toys120X._SY85_CB468851693_.jpg'
            alt=''
          />
          Toys & Games
        </div>
      </div>
      <a href='/'>Shop now</a>
    </div>
  )
}

export default ShopByCategory
