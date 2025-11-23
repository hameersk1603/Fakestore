import React from 'react'
import { Link } from 'react-router-dom'

import Mobiles from './Mobiles'
import Computer from './Computer'
import Fridge from './Fridge'
import Furniture from './Furniture'
import Kitchen from './Kitchen'
import Men from './Men'
import Ac from './Ac'
import Speaker from './Speaker'
import Tv from './Tv'
import Watch from './Watch'
import Women from './Women'
import BannerSlider from './autosc'

const Products = () => {
  return (
    <div>
      {/* Banner */}
      <BannerSlider />
    <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          gap: '5px',
          padding: '20px',
          width:'100%'
        }}
      >
        {/* Left frame: grid for Mobiles, Computer, Men */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            
            flex: 3, // takes more space
          }}
        >
          <Mobiles />
          <Computer />
          <Men />
          {/* Add other left frame items here if needed */}
        </div>

        {/* Right frame: Furniture */}
        <div
          style={{
            flex: 3, // smaller width than left frame
          }}
        >
          <Furniture />
          <Tv/>
        </div>
      </div>
      <div><Kitchen/></div>
      
    </div>
  )
}

export default Products









