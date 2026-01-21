import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import CounterCard from './component/CounterCard';


function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
   
      <CounterCard />
    
   </div>
  )
} 

export default App
