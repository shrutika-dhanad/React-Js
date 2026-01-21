import { useState } from 'react'

// import StateEx from './Components/StateEx'
import Display from './Components/Display'
import Button from './Components/Button'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    


    {/* <StateEx  title="info1" name={name} setName={setName}/>
     <StateEx title="info2" name={name} setName={setName}/>
     <h2>i am chnaging inside parent componennt : {name}</h2> */}

      <Display count={count}/>
      <Button  setCount={setCount}  />

    


    </div>
  )
}

export default App
