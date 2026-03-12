import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Products = () => {

const navigate=useNavigate()


  return (
    <div>
       <h1>This is my Products page</h1>
     <nav style={{marginBottom: '20px'}}>
        
         <Link to="/products/car">Cars </Link> | | 
         <Link to="/Products/bike">Bike </Link> 
         <br />
         <br />
   <button onClick={()=>navigate("/Contact")}>Go to Contact page</button>

   <Outlet/>
     </nav>
   </div>

     
  )
}
export default Products