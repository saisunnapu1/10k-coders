import React, { Component } from 'react'
import withCounter from './withCounter'
import UpdateComponent from'./withCounter'

export class HoverCounter extends Component {
// constructor(props) {
//       super(props)
    
//       this.state = {
//          count:0,
         
//       }
//     }
    // handleCounter=()=>{
    //     this.setState(prevState=>{
    //         return{count:prevState.count+1}
    //     })
    // }

  render() {
      // const{count}=this.state
      const{count,handleCounter}=this.props
    return (
      <div>
      <h1 onMouseOver={handleCounter} >Hovered {count} times  {this.props.name}</h1>
        
      </div>
    )
  }
}

export default withCounter( HoverCounter)
