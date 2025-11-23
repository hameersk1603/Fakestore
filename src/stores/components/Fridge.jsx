import React from 'react'
import { fridgeData } from '../data/fridge'
const Fridge = () =>{
     const firstFiveImages = fridgeData.slice(0,5)
  return (
    <>
    <div className="proTitle"> 
        <h2>Fridges</h2>
    </div>
    
    <div className='proSection'>
        {
            firstFiveImages.map((item)=>{
                return(
                    <div className='imgBox'>
                        <img  className='proImg' src={item.image} alt=""/>
                    </div>
                )
            })
        }
    </div></>
  )
}
export default Fridge