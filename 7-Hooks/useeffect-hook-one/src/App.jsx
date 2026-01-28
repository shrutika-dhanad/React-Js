import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [total, settotal] = useState(1)

  useEffect(()=>{
      // alert("runs on every render. ")
     //  alert("run only on first render")
    // alert("runs on evry render when state updated.")
  //alert("runs on evry render when count/ total updated.")
alert("count is updated")
 return()=>{
 alert("count is umounted from UI")
  
 }
  // })
  // },[])
  // },[count])
  // },[count,total])
  },[count])
function clickHandeler(){
  setCount(count+1);

}

function clickTotal(){
  settotal(total+1)
}

  return (
  <div>

<button onClick={clickHandeler}>Click Me</button>
<h2>count is : {count}</h2>
<br />
<button onClick={clickTotal}>Click Me</button>
<h2>total is : {total}</h2>

<br />
  </div>
  )
}
export default App



