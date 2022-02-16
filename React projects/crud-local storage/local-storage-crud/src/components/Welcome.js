import React, { Component } from 'react'

 class Welcome extends Component {
 
     
  render() {
      const {name,nickName}=this.props
      //const {state1,state2}=this.state
    return (
      <div>
          <h1>{name} Also knows as {nickName}</h1>
        
      </div>
    )
  }
}

export default Welcome
