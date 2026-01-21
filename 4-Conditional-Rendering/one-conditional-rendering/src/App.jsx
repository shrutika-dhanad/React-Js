import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginBtn from './Components/LoginBtn'
import LogoutBtn from './Components/LogoutBtn'

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false)


if(!isLoggedIn){
  return(                                          //early return  
    <LoginBtn />
  )
}





return(
<div>
 <h1>welcome to React js..</h1>                     //Logical operator..
 {isLoggedIn && <LogoutBtn/>  }
</div>
)




// return(
// <div>
//    {isLoggedIn ? <LogoutBtn /> : <LoginBtn />}    //ternary operater.

// </div>
//)
   

//   if(isLoggedIn){
// return(
//   <LogoutBtn />                                 //if else
// )                
//   }else{
//     <LoginBtn />
//   }
 
}

export default App
