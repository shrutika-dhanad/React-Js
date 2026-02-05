import React, { useContext } from 'react'
import { ValueContext } from '../App'

const ValueDisplayer = () => {

const value=useContext(ValueContext)
  return (
    <div>

<h1>name :{value.user}</h1>
<h2> age :{value.age}</h2>
<h3>city :{value.city}</h3>


    </div>
  )
}

export default ValueDisplayer