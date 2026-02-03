import React, { useContext } from 'react'
import { ThemeContext } from '../App';



const Theme = () => {
const {theme,setTheme}=useContext(ThemeContext);


    function HandelCilck(){
   if(theme ==='light'){
    // console.log(")
     setTheme('dark')
   }else{
    setTheme('light')
   }
    }

  return (
    <div>
    

<button onClick={HandelCilck}>Click me </button>

    </div>
  )
}

export default Theme


// Create Context

// Store theme in state

// Share theme using Provider

// Consume theme using useContext

// Change theme using button

// UI updates automatically 🎉



// This code uses React Context API to manage a global light/dark theme and toggle it without props drilling.