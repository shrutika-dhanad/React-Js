import React from 'react'

const Practice = ({cliked,text,children}) => {
  return (
    <div>
    {children}  
  <button onClick={cliked}>
    {text}

  </button>


    </div>
  )
}

export default Practice