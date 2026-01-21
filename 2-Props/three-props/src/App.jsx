import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Practice from './assets/Practice';


function App() {
 const [inc,setInc]=useState(5);
 function increment(){
  setInc(inc+1)
 }

  return (
  <div>
    <Practice cliked={increment} text="I am changing!">
        <h3>Increment Count is : {inc}</h3>

    </Practice>
  </div>
  )
}

export default App
