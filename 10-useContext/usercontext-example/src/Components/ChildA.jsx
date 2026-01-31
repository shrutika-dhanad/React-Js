import React, { useContext } from 'react'
import ChildB from './ChildB'
import { UserContext } from '../App'
const ChildA = () => {
const user=useContext(UserContext)
  return (
    <div>
   <h1>my sir name is: {user.sirname}</h1>  
     <ChildB/>

    </div>
  )
}

export default ChildA