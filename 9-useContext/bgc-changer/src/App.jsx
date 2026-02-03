import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Theme from './Components/Theme'

const ThemeContext=createContext()

function App() {
 const [theme, setTheme]=useState('light')

  return (
    <ThemeContext.Provider value={{theme,setTheme}}>

     <div id='container' style={{backgroundColor:theme ==='light'?"beige":"black"}}>
      <Theme />
    </div>

    </ThemeContext.Provider>
    
  )
}

export default App
export {ThemeContext}