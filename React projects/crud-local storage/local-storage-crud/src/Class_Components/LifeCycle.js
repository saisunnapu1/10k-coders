import React, { Component } from 'react'

export class LifeCycle extends Component {
    constructor(props) {
        console.log("A constructor")
      super(props)
    
      this.state = {
         name:"sai"
      }
    }
    static getDerivedStateFromProps(props,state){
        console.log("A getDerivedStateFromProps ")
        return null
    }
    componentDidMount(){
        console.log("A componentDidMount")
    }
    
  render() {
      console.log('A Render')
    return (
      <div>
          <h1>LifeCycleA</h1>
          {/* <LifeCycle/> */}
        
      </div>
    )
  }
}

export default LifeCycle
