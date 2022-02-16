import React, { Component } from 'react'

 class ClassClick extends Component {
     clickHandler(){
         console.log("clicked the class component")
     }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler} >Class click me</button>
      </div>
    )
  }
}

export default ClassClick
