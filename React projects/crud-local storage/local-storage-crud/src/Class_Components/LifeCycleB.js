import React, { Component } from 'react'

export class LifeCycleB extends Component {
    constructor(props) {
        console.log("B constructor")
      super(props)
    
      this.state = {
         name:"sai"
      }
    }
    static getDerivedStateFromProps(props,state){
        console.log("B  getDerivedStateFromProps ")
        return null
    }
    componentDidMount(){
        console.log(" B   componentDidMount")
    }
    
  render() {
      console.log('B Render')
    return (
      <div>
          <h1>LifeCycleA</h1>
        
      </div>
    )
  }
}

export default LifeCycleB
