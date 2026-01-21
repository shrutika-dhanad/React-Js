import React from 'react'

const Button = (Props) => {
  return (
    <div>
        {Props.children}
        <button onClick={Props.incrementCount} >
          {Props.text}
          </button>
         {/* {Props.children}// */}
        
    </div>
  )
}

export default Button