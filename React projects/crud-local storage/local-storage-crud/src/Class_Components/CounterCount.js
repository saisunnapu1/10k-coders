import React, { Component } from 'react'

export class CounterClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    handleCounter=(event)=>{
      this.setState({
        count:this.state.count+1
      })
       
    }
    
  render() {
    return (
      <div>
        <h1>hai i m counter app</h1>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleCounter} >Count</button>
      </div>
    )
  }
}

export default CounterClass
