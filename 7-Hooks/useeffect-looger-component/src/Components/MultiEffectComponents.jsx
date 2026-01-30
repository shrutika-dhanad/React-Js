import React, { useEffect, useState } from 'react'

const MultiEffectComponents = () => {
    const [count,setCount]=useState(0);
    const [second, setSecond]= useState(0)


    useEffect(()=>{
     console.log("count is chnaged: " , count)
    },[count])


    useEffect(()=>{
      const IntervalID = setInterval(()=>{
        console.log("setInterval is Started", second)
        setSecond(prevSecond => prevSecond+1)
      },1000)
        return()=>{
            console.log("time to Stop")
          clearInterval(IntervalID)
        }
    },[])  //runs only on first render
 
  return (
    <div>
    <h1>Count is : {count}</h1>
    <button onClick={()=>{setCount(count+1)}}>Increment Count</button>

    <br />
  
  <h1>Second is {second}</h1>

    </div>
  )
}

export default MultiEffectComponents