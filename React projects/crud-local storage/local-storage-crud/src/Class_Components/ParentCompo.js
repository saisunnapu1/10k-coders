import React, { Component } from 'react'
import MemoComponent from '../Hooks_components/MemoComponent'
import PureCompo from './PureComponent'
import RegularCompo from './RegularCompo'

export class ParentCompo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"sai"
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:"kiran"
            })
        },2000)
    }
    
  render() {
    //   console.log(this.state.name);
      console.log("............Parent Component..............")
    return (
      <div>
        <h1>Parent Components</h1>
        <MemoComponent name={this.state.name} />
        {/* <RegularCompo name={this.state.name} />
        <PureCompo name={this.state.name} /> */}
      </div>
    )
  }
}

export default ParentCompo
