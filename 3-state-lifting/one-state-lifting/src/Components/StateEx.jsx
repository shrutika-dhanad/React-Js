import React from 'react'

const StateEx = (Props) => {
  return (
    <div>
  <input type="text" onChange={(e)=>{ Props.setName(e.target.value)}}/>   
  <h1> name is changes  using the state lifitin like a {Props.title} :{Props.name}</h1>

    </div>
  )
}

export default StateEx