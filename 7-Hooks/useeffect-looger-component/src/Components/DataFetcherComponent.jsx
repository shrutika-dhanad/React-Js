import React, { useState , useEffect} from 'react'

const DataFetcherComponent = () => {
const [data, setData]= useState(0)
const [loading, setLoading]= useState(true)

useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(json => console.log(json))
      setData(json)
      setLoading(false)
  return () => {
    
  }
}, [])





  return (
    <div>
{loading ? (
 <h1>Loading....</h1>
) : (

    <ul>
        {
            data.map(post =>(
                <li key= {post.id}>{post.title}</li>
            ))
        }

    </ul>

)

}



    </div>
  )
}

export default DataFetcherComponent