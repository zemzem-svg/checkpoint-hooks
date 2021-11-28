import React from 'react'
import ReactStars from "react-rating-stars-component";

function MovieFiletr({filterText,filterRate}) {
    return (
        <div>
            <input onChange={(e)=>filterText(e.target.value)}/>
           <ReactStars
    count={5}
     onChange={(newRating)=>filterRate(newRating)}
    size={24}
    activeColor="#ffd700"
  /> 
        </div>
    )
}

export default MovieFiletr
