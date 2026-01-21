import React from 'react'


const First = ({setFirstName}) => {
  return (
    <div>
  <input type="text" placeholder="first name:" 
  onChange={(e)=>setFirstName(e.target.value)}
  />
    

    </div>
  )
}

export default First



