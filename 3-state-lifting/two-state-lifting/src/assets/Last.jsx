import React from 'react'

const Last = ({setLastName}) => {
  return (
    <div>
   <input type="text" placeholder="lastName:"
   onChange={(e)=>setLastName(e.target.value)}
/>
    

    </div>
  )
}

export default Last