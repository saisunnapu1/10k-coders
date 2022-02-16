import React, { Component } from 'react'

export class ClassTimer extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    componentDidMount(){
        this.internal=setInterval(this.tick,1000)
    }
    componentWillUnmount(){
      clearInterval(this.internal)
    }
    tick=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    
  render() {
    return (
      <div>
    {this.state.count}
      </div>
    )
  }
}

export default ClassTimer;
