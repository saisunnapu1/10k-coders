import React, { Component } from 'react'
//Conditional rendering
//4 types

export class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:false
      }
    //   this.handler=this.handler.bind(this);
    }
    // handler(){
    //     this.setState({
    //         isLoggedIn:false
    //     })
    // }
    
  render() {
      //1.if/ else 
                    //   if(this.state.isLoggedIn){
                    //       return <div><h1>Welcome sai</h1></div>
                    //   }else{
                    //       return <div><h1>Welcome guest</h1>
                    //       <button onClick={this.handler} >click me</button>
                    //       </div>
                    //   }
    //2.Element variable
    
    //  let message
    //  if(this.state.isLoggedIn){
    //       message=<h1>Well come sai</h1>
    //  }else{
    //      message=<h1>well come guest</h1>
    //  }
    // //  return <h1>{message}</h1>

    //  3.ternary operator
    return (
      this.state.isLoggedIn ?
      <h1>WEll come sai</h1> :
     <h1>welcome guest</h1>
    )

    //4.short circuit method
    // return this.state.isLoggedIn && <h1>welcome sai</h1>//nothing will results if it was false
  }
}

export default UserGreeting
