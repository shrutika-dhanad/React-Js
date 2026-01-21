import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './assets/Button'
function App() {
  const [count, setCount] = useState(0)

  function HandlerClick(){
    setCount(count+1)
    console.log("clicked")
  }
  return (
   <div>
    <Button incrementCount={HandlerClick} 
    text="Click Me">
    <h1>count is :{count}</h1>

    </Button>




   </div>
  )
}

export default App
