import React, { useEffect, useState } from 'react'

const TimerComponent = () => {
const [second, setSecond] =useState(0)

useEffect(() => {
  const IntervalId= setInterval(()=>{
    setSecond(prevSecond => prevSecond+1)
  },1000)

  return () => {
    clearInterval(IntervalId)
  }
}, [])

//..............................Runs On First Rendder Onlyy......................

  return (
    <div>
   <h1>Second  is :{second}</h1>
    </div>
  )
}

export default TimerComponent