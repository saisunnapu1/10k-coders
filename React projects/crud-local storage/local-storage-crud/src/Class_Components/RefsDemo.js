import React, { Component } from 'react'

export class RefsDemo extends Component {
    constructor(props) {
      super(props)
    
            this.inputRef=React.createRef()
    }
    componentDidMount(){
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }
    ClickHandler=()=>{
        alert(this.inputRef.current.value)
    }
    
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef}/>
        <button onClick={this.ClickHandler} >Click</button>
      </div>
    )
  }
}

export default RefsDemo
