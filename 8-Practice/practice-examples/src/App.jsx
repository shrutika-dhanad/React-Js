import { useState } from 'react'
import Message from './Components/Message'
import './App.css'

function App() {
  // const [text, setText] = useState(" ")

  const [inputText, setInputText] =useState(" ")
  const [displayText, setDisplayText] =useState(" ")



  return (
  <div>
    {/* <Message msg={text}  />
    <button onClick={(()=>{setText("hello shrutika")})}>chanage text</button> */}

    {/* <input type="text" placeholder='enter text' value={text} onChange={(e)=> setText(e.target.value) }/>
    <Message msg={text} /> */}

  <input type="text" placeholder='enter text' value={inputText} onChange={(e)=>{setInputText(e.target.value)}} />

  <br /> <br />  


  <button onClick={()=>setDisplayText(inputText)}>click me</button>

 <h2>{displayText}</h2>




  </div>
  )
}

export default App
