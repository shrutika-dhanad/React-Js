import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

function HandelClick(){
  alert("i am clicked..")
}
function mouseHandeler(){
  alert("Maavdii");

}

function InputHandeler(e){
  console.log("value till now: ",e.target.value)
}

function SubmitHandeler(e){
e.preventDefault();
alert("can i submit the form or not !")
}

function handeleer(){
console.log("ok shrutika")
}

  return (
   <div>
  
   <h1 onMouseOver={mouseHandeler} style={{backgroundColor:"pink", font:"large", border:"2px solid grey", width:"30%", padding:"2rem", margin:"2rem" }}>
    shrutika Bhagwan dhanad</h1>

    <button onClick={HandelClick}>Click Me</button>

   
 <form onSubmit={SubmitHandeler}>
   <input type="text" onChange={InputHandeler} />
   <button>Submit</button>


 </form>
<div>
 {/* <button onClick={alert("immidiate invoke..")}>hello</button>  //not do like this it is a immidiate invokation */}
 //always pass the functiion reference 
 //Ex:-

{/* <button onClick={handeleer}>clicksss</button> */}

<button onClick={()=>{alert("Hey shrutika")}}>hhhhhh</button>


</div>
   </div>
  )
}

export default App
