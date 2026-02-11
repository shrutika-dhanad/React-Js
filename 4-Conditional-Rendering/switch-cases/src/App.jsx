import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StatusMessage from './Components/StatusMessage'

function App() {
const [status,setStatus]=useState("loading")

useEffect(()=>{
setTimeout(()=>{
// setStatus("success")
setStatus("error")

},4000)

},[])


  return (
    <div>
    <StatusMessage status={status} />
    </div>
  )
}

export default App
