import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

 class ParentComponent extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          parentName:'parent'
              }
              this.greetparent= this.greetparent.bind(this)
     }
    
    greetparent(childName){
      alert(`hello ${this.state.parentName} from ${this.childName}`)
    }
     
  render() {
    return (
      <div>
        <ChildComponent greethandler={this.greetparent} />
      </div>
    )
  }
}

export default ParentComponent
