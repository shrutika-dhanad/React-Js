import { createContext, useState } from "react"
import ValueDisplayer from "./Components/ValueDisplayer"

const ValueContext=createContext()


function App() {
const [value,setValue]=useState({user:"shrutika Dhanad", age:20, city:"shirdi"})

  return (
    
<ValueContext.Provider value={value}>
  <ValueDisplayer />
</ValueContext.Provider>

  )
}

export default App
export {ValueContext}