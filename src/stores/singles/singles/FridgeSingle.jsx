import React from 'react'
import { useParams } from 'react-router-dom'
import { fridgeData } from '../../data/fridge'
import Navbar from '../../components/Navbar'
import { useCart } from '../../context/CartContext'

const FridgeSingle = () => {
  const { id } = useParams()
  const { addToCart } = useCart()
  const pro = fridgeData.find((item) => item.id === id)

  return (
    <>
      <Navbar />
      <div className="ind-section">
        <div className="ind-image">
          <img src={pro.image} alt="" />
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
          <div className="ind-desc space">
            <p>{pro.description}</p>
          </div>

          {/* Correct Add to Cart button */}
          <button onClick={() => addToCart(pro)}>Add to Cart</button>
        </div>
      </div>
    </>
  )
}

export default FridgeSingle
