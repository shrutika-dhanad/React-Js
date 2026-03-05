import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import "./About.css"

const About = () => {
  return (
    <div>
      <h2>About page page</h2>
    <nav>
      <ul>
      <li className='list'>
        <Link to="team"><h1>Our Team</h1></Link>
        <Link to="company"><h1>Our Company</h1></Link>
      </li>
      </ul>
    </nav>
    <Outlet/>
    </div>
  )
}

export default About