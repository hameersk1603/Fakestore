import React from 'react'

import { useParams } from 'react-router-dom'
import { speakerData } from '../../data/speaker'
import Navbar from '../../components/Navbar'
import { useCart } from '../../context/CartContext'

const SpeakerSingle = () => {
  const { id } = useParams()
  const {addToCart,cartItems} =useCart()
  const pro = speakerData.find(item => item.id === id)

  

  return (
    <>
      <Navbar />
      <div className="ind-section">
        <div className="ind-image">
          <img src={pro.image} alt="not found" />
        </div>
        <div className="ind-details space">
          <div className="ind-company">
            <h2>{pro.brand}</h2>
          </div>
          <div className="ind-model space">
            <h3>{pro.model}</h3>
          </div>
          <div className="ind-price space">
            <h2>{pro.price}</h2>
          </div>
          <div className="ind-desc space ">
            <p>{pro.description}</p>
          </div>
          <button onClick={()=>addToCart(pro)}>Add to Cart</button>
        </div>
      </div>
    </>
  )
}

export default SpeakerSingle
