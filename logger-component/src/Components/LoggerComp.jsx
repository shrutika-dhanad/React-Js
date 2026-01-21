import React from 'react'
import { useState,useEffect } from 'react'

const LoggerComp = () => {
const[count,setCount]=useState(0);

useEffect(() => {

   console.log("component render or count changed",count)

  
 
}, [count])

 //Runs on every render..................................................
 
  return (
    <div>
    <h1>count is :{count}</h1>
    <button onClick={() => setCount(count + 1)}>

        Increment 
    </button>
    </div>
  )
}

export default LoggerComp