
import { useEffect, useState } from 'react'
import './App.css'

function App() {
const[count,setCount]=useState(0)
const[total, setTotal]=useState(1)


//variation 1:
//Runs om every render.

// useEffect(() => {
//  alert("hey im runing")
  
// })

///variation 2
//runs only on fisrt render

// useEffect(() => {
//  alert(" runs on omly first render")
// }, [])


//variation 3
//runs on every render when state variables value is udpdated

// useEffect(() => {
//   alert("i am udated when count/total updated ")
// }, [count,total])

 useEffect(() => {
   
  alert("count is updated")      //variation 5
                                 //uses the cleaunp function 

  
   return () => {
     alert("count is un mounted from UI.")
   }
 }, [count])
 
function  handelClick(){
  setCount(count+1)
}

//variation 4
//multuple dependencies 

function handleTotal(){
  setTotal(total+1)
}


  return(
    <div>
<button onClick={handelClick}>
  usdate count
</button>
<br />
count is : {count}


<br />

<button onClick={handleTotal}>
  update totol
</button>
<br />
total is : {total}

    </div>
  )

}

export default App
