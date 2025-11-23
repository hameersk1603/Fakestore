import React from 'react'
import Navbar from '../stores/components/Navbar'
import { useParams } from 'react-router-dom'
import { tvData } from '../stores/data/tv'
import { useCart } from '../../context/CartContext'

const TvSingle = () => {
  
    const {id} =useParams()
    const {addToCart,cartItems} =useCart()
    const pro=tvData.find((item)=> item.id === id)
  return (
    <>
    <Navbar/>
    <div className="ind-section">
      <div className="ind-image">
        <img src={pro.image} alt="" />
      </div>
      <div className="ind-details space">
        <div className="ind-company">
            <h2>{pro.company}</h2>
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
      <button onClick={()=>addToCart(pro)}> Add to Cart</button>
      </div>
    </div>
    </>
  )
}

export default TvSingle