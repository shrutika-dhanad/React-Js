import React, { useContext } from 'react'
import { ThemeContext, UserContext } from '../App'
const Theme = () => {

const {theme,setTheme}  = useContext(ThemeContext)
const user=useContext(UserContext)

function toggle(){
    if(theme==='light'){
        setTheme('dark')
    }
    else{

        setTheme('light')
    }
}


  return (
    <div>

<button onClick={toggle}>Click on changer</button>


<h1 style={{color:"pink"}}>Data: {user.name}</h1>
    </div>
  )
}

export default Theme