import React, { useState,useEffect } from 'react'

const ResizewinComponent = () => {
const [windowWidth, setWindowWidth]= useState(window.innerWidth)

useEffect(() => {
  const handelSize =() => setWindowWidth(window.innerWidth)


  console.log("event list added ")
  window.addEventListener('resize', handelSize)

  return () => {
    console.log("ebent list removesd")
    window.removeEventListener('resize',handelSize)
  }
}, [])



  return (
    <div>

 <h1>window width : {windowWidth} px</h1>

    </div>
  )
}

export default ResizewinComponent


