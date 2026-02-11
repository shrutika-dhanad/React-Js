import { useState,useEffect } from "react"


function App() {
  const [isLoding, setIsLodding]=useState(true);
  const [data,setData]=useState()

  useEffect(() => {
    setTimeout(()=>{
      setData("fetched Data..")
      setIsLodding(false)
    },5000)
  }, [])
  


  return (
    <div>
     {
      (isLoding)? 
      <h1>Lodding...</h1>
      :
      (
        <h1>{data}</h1>
      )
     }
    </div>
  )
}

export default App
