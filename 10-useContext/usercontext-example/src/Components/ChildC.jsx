import React, { useContext } from 'react'
import {UserContext} from '../App'
const ChildC = () => {
    const user= useContext(UserContext);

  return (
    <div>
   <h1>Data: {user.fullname}</h1>
        
    </div>
  )
}

export default ChildC