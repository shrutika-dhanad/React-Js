import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet
} from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Team from "./Component/Team";
import Company from "./Component/Company";
const App = () => {
  return (
    <div>
      <Router>
    <li className="myList">
        <Link to="/"><h1>Home</h1></Link>
        <Link to="/about"><h1>About</h1></Link>
        <Link to="/contact"><h1>Contact</h1></Link>

    </li>
<Routes>
  <Route path="/" element={<Home />} />

  <Route path="/about" element={<About />}>
    <Route path="team" element={<Team />} />
    <Route path="company" element={<Company />} />
  </Route>

  <Route path="/contact" element={<Contact />} />
</Routes>    
</Router>
</div>
  )
}

export default App