import React from 'react'
import {Outlet, useNavigate}  from "react-router-dom";
const Home = () => { 
    const navigate =useNavigate()


    function HandelClick(){
        navigate("/contact")
    }
  return (
    <div className='home'>
     <h2>Home page</h2>
       <button onClick={HandelClick}>Go to Contact</button>
    <Outlet/>
    </div>
  )
}

export default Home