import React from 'react';
import  { useState,useEffect } from 'react'

const TimerComponent = () => {
const[second,setSecond]=useState(0);
 
useEffect(() => {
  const intervalId= setInterval(()=>{
    console.log("timer is executed..")
    setSecond(prevSecond=>prevSecond+1)
  },1000)

  return () => {
    console.log("timer is Stop..")

   clearInterval(intervalId);

  }
}, [])

//runs only first render


  return (
    <div>

       <h1> second:{second} </h1>
    </div>
  )
}

export default TimerComponent