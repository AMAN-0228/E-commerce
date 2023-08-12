import React from 'react'
import { BiSolidStar,BiSolidStarHalf,BiStar } from "react-icons/bi";
const Star = ({stars,reviews}) => {
    console.log(stars,reviews)
    const starArray = Array.from({length : 5},(elem,index)=>{
        const number = index + 0.5
        return(
            <span key={index}>
                {
                    stars >= index + 1?(
                      <BiSolidStar/>
                    ): stars >= number?(
                      <BiSolidStarHalf/> 
                    ): (<BiStar/>)
                }
            </span>
        )
    })
  return (
    <div>
      {starArray}<p>({reviews}reviews)</p>
    </div>
  )
}

export default Star
