import React, { useContext } from 'react'
import ChildC from './ChildC'
import { UserContext } from '../App'

const ChildB = () => {
  const user= useContext(UserContext)
  return (
    <div>

      <h1> my name  is : {user.name}</h1>
 < ChildC />

    </div>
  )
}

export default ChildB