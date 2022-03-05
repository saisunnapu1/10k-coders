import React, { Component } from 'react'

export class RenderPropsHover extends Component {


    // constructor(props) {
    //     super(props)
      
    //     this.state = {
    //        count:0
    //     }
    //   }
    //   incrementCount=()=>{
    //       this.setState(preState=>{
    //           return{count:preState.count+1}
    //       })
    //   }

  render() {
    const{count,incrementCount}=this.props
    return (
      <div>
        <h2 onMouseOver={incrementCount} >Hovered {count} Times</h2>
      </div>
    )
  }
}

export default RenderPropsHover
