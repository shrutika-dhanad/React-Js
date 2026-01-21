import React from 'react'
import "./Card.css"
import coding from "../assets/coding.png";
const Card= (Props) => {
  return (
    <div className='Card' style={{overflow:"hidden"}}> 
    <img src={coding} alt="coding" width={200} style={{border:"4px solid black",
    }} />
        <h1>Title of the Card : {Props.title}</h1>
        <p>Description of the Card : {Props.desc}</p>

  <button id='btn'>Submit </button>
    </div>
  )
}

export default Card