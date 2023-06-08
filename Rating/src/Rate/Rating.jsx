import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import './Rate.css'
const Rating = () => {
  const [rating,setRating]=useState(null)
  const [hover,setHover]=useState(null)
  return (
    <div className='App'>
      <div>
        <h1>Rate Me</h1>
      </div>
      <div>
        {[...Array(5)].map((star,i)=>{
        const ratingValue=i+1
        return(
          <label>
            <input type="radio" 
                name="rating" 
                value={ratingValue} 
                onClick={()=>setRating(ratingValue)}     
            />
            <FaStar className='star' 
                    color={ratingValue <= (hover || rating) ? "#ffb703" : "#e5e5e5"} 
                    size={100}
                    onMouseOver={()=>setHover(ratingValue)}
                    onMouseOut={()=>setHover(null)}      
            />
          </label>
        )
      })}
      </div>
      <div>
        <h1>Rating is : {rating}</h1>
      </div>
    </div>
  )
}

export default Rating