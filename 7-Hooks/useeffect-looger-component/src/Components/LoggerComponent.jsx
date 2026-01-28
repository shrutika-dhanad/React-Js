import React, { useEffect, useState } from 'react'

const LoggerComponent = () => {
    const [count,setCount]=useState(0)

useEffect(() => {
    alert("component render or count chnaged")
})


//......................It will run on every render......................

  return (
    <div>
<h1>Count is : {count}  </h1>
      
<button onClick={()=>{
    setCount(count+1)
}}>
    Increment
 </button>


    </div>
  )
}

export default LoggerComponent