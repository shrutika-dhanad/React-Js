import React, { Component } from 'react'
import Counter from './Componentss/Counter'
export default class App extends Component {


    constructor(){

        super()
         this.state={
            count:0
         }

    }
    componentDidMount(){
        console.log("component render 1st time ")
    }

    increment(){
        this.setState({count: this.state.count+1})
    }
  render() {
    return (
     <div> 

<Counter number={this.state.count} />

        <h1>Shrutika Dhanad</h1>
        {/* <h2>{this.state.count}</h2> */}
  <button onClick={()=>{
    this.increment()
  }}>Click Mee</button>
     </div>
    )
  }
}
