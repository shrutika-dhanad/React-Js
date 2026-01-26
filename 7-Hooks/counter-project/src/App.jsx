import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

const increHandeler= ()=>{
  
  if(count<20){
     setCount(count+1)
  }
}

const decrHaandeler=()=>{
   if(count > 0){
  setCount(count - 1)
 
  
}
}

  return (
    <div>
 <h1>Counter Project</h1>
  <button onClick={increHandeler}>increment is</button>
  <h2>Counter is : {count}</h2>
   <button onClick={decrHaandeler}>Decrement</button>


    </div>
  )
}

export default App
