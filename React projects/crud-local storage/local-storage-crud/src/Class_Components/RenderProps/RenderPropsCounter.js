import React, { Component } from 'react'

export class RenderPropsCounter extends Component {
    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      count:0
    //   }
    // }
    // incrementCount=()=>{
    //     this.setState(preState=>{
    //         return{count:preState.count+1}
    //     })
    // }
  render() {
      
      const{count,incrementCount}=this.props
      

    return (
     
      <div>
         <button onClick={incrementCount} >Clicked {count}times</button>
        
      </div>
    )
  }
}

export default RenderPropsCounter
