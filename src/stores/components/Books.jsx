import React from 'react'
import { booksData } from '../data/books'

const Books= () => {
    const firstFiveImages = booksData.slice(0,5)
  return (
    <>
    <div className="proTitle"> 
        <h2>Books</h2>
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

export default Books