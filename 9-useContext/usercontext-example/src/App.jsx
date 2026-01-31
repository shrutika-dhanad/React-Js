import { createContext,useState } from 'react'
import ChildA from './Components/ChildA'

//step 1 :create context
  const UserContext = createContext();
function App() {
 

//step 2: wrap all the child inside provider.
//step 3: pass value
const [user ,setUSer]=useState({name:'shrutika' ,sirname:"dhanad" ,fullname:"shrutika bhagwan dhanad"})


  return (
    <>
      <UserContext.Provider value={user}> 
        <ChildA />
      </UserContext.Provider>
     
    </>
  )
}

export default App
export {UserContext}

