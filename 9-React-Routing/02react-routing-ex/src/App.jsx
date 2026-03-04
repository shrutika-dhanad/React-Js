import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import Contact  from './Components/Contact';

function App() {
   return (
<BrowserRouter>

<nav>
<Link to="/">Home</Link>
<br />
<br /> 
<Link to="/contact">Contact</Link>
</nav>

<Routes>

  <Route  path="/" element={<Home/>}/>
  <Route  path="/contact" element={<Contact/>}/>

</Routes>
</BrowserRouter>



 
   
  )
}

export default App
