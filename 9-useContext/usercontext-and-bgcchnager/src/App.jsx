import Theme from './Components/Theme';
import { createContext, useState } from 'react'
import './App.css'
import ChildA from './Components/ChildA';


 const ThemeContext = createContext();
 const UserContext=createContext();

function App() {
const [theme, setTheme]=useState('light')
const [user, setUser]=useState({name:"shrutika"})

  return (

<UserContext.Provider value={user}>
    

    <ThemeContext.Provider value={{theme,setTheme}} >
      <div id='myTheme' style={{backgroundColor:theme === 'light'?"beige":"black"}}> 
       <Theme/>
       <ChildA />
       </div>
    </ThemeContext.Provider>
</UserContext.Provider>
  )
}

export default App
export {ThemeContext}
export {UserContext}