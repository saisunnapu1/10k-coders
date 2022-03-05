import React, { Component } from 'react'
import withCounter from './withCounter'
import UpdateComponent from'./withCounter'

export class ClickCounter extends Component {
    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      count:0,
    //   }
    // }
    // handleCounter=()=>{
    //     this.setState(prevState=>{
    //         return{count:prevState.count+1}
    //     })
    // }
   
   
  render() {
      // const{count}=this.state
      const {count,handleCounter}=this.props
    return (
      <div>
      <h1>Hai i m counter {this.props.name}</h1>
<button onClick={handleCounter} >Clicked {count} times {this.props.name} </button>

      </div>
    )
  }
}

export default withCounter(ClickCounter)
