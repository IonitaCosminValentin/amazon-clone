import React from 'react'
import DealsAndPromotions from './DealsAndPromotions'
import FurnitureSectiom from './FurnitureSectiom'
import GamingAccessories from './GamingAccessories'
import SignInSection from './SignInSection'
import HealthSection from './HealthSection'
import Electronics from './Electronics'
import SportSection from './SportSection'
import ShopByCategory from './ShopByCategory'

const Body = () => {
  return (
    <div className='body'>
      <div className='top-container'>
        <GamingAccessories />
        <FurnitureSectiom />
        <DealsAndPromotions />
        <SignInSection />
        <HealthSection />
        <Electronics />
        <SportSection />
        <ShopByCategory />
      </div>
    </div>
  )
}

export default Body
