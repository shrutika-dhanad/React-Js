
import {BrowserRouter, Route ,Routes,Link,Outlet} from 'react-router-dom'
import Home from './Components/Home'
import Products from './Components/Products'
import Contact from './Components/Contact'
import CarProduct from './CarProduct'
import BikeProduct from './BikeProduct'
function App() {
  return (
  <BrowserRouter>
    <nav className='myNav'>
     <Link to="/home">Home</Link>
     <Link to="/products">  Products</Link>
     <Link to="/contact">Contact</Link>

    </nav>

    <Routes>
      <Route path="/home" element={<Home/>} />{"|"}
      <Route path="/products" element={<Products/>} >
        <Route path="car" element={<CarProduct/>} />
        <Route path="bike" element={<BikeProduct/> }/>
      </Route>
      <Route path="/Contact" element={<Contact/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
