import React from 'react'
import "./StatCard.css"

export default function StatCard() {
  let labelText: string = "flipping card, photo and info"
  return (
<>
<div className="flip-card" aria-label={labelText} aria-required="true">
    {/* <div className="flip-card-ball-bg"> */}
  <div className="flip-card-inner">
      <div className="flip-card-front">
        <h1>Folks</h1> 
      </div>
      <div className="flip-card-back">
          <h1>5</h1>
      </div>
    </div>
  {/* </div> */}
</div>
</>


    // <div className="statCard">StatCard</div>
  )
}


   