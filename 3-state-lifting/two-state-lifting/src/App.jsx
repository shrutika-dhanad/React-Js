import { useState } from 'react'
import First from './assets/First'
import Last from './assets/Last'
import './App.css'

function App() {
 const [firstName, setFirstName]=useState(" ")
 const [lastName, setLastName]=useState(" ")


  return (
    <div>
<First setFirstName={setFirstName}/>
<Last  setLastName={setLastName}/>

<h2>full Name: {firstName} {lastName}</h2>
    
    </div>
  )
}

export default App
