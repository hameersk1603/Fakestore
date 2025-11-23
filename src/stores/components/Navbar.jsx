import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {

  const {cartItems}=useCart()
  return (
    <>
        <div className="navSection">
            <div className="title">
                <h2><span style={{ color: 'violet' }}>Fake</span><span style={{ color: 'lime' }}>store</span></h2>
            </div>
            
              <div className="user">
                <Link to="/cart" className="cart-wrapper">
            <FaShoppingCart className="cart-icon" />
            <span className="cart-count">{cartItems.length}</span>
          </Link>
                
                
              </div>
        </div>
        <div className="subMenu">
           <ul>
            <Link to='/home'><li>Home</li></Link>
            <Link to='/mobiles'><li>Mobiles</li></Link>
            <Link to='/computers'><li>Computers</li></Link>
            <Link to='/fridges'><li>Fridge</li></Link>
            <Link to='/watch' ><li>Watches</li></Link>
            <Link to='/men' ><li>Men Fashion</li></Link>
            <Link to='/woman' ><li>Woman Fashion</li></Link>
            <Link to='/fur' ><li>Furniture</li></Link>
            <Link to='/ac' ><li>AC</li></Link>
            <Link to='/ki' ><li>Kitchen</li></Link>
            <Link to='/spe' ><li>Speakers</li></Link>
            <Link to='/tv' > <li>LED TV's</li></Link>
            
            
           </ul>
        </div>
    </>
  )
}

export default Navbar