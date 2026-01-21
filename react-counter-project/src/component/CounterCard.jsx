import React, { useState } from 'react'
import './CounterCard.css'

const CounterCard = () => {
    const[counter,setCount]=useState(0)
  return (
    <div className='counter-container'>
      <p id='para'>You have clicked {counter} times</p>   
       <button id='btn' onClick={()=>{
        setCount(counter+1)
       }}>Click Me</button>

    </div>
  )
}

export default CounterCard