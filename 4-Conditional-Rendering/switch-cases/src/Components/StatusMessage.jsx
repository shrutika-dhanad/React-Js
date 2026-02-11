import React from 'react'

function StatusMessage({status}) {

    switch(status){
        case "loading":
        return <h1>Lodding...</h1>

        case "success" :
            return <h2>Data Loaded Successfully</h2>

        case "error": 
         return  <h2>error is occured</h2>


           default:
            return "unknown status"
            }
}

export default StatusMessage