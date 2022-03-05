import React, { PureComponent } from 'react'

 class PureCompo extends PureComponent {

  render() {
    console.log("............Pure Component..............")
    return (
      <div>
          <h1>I am pure component { this.props.name}</h1>
        
      </div>
    )
  }
}

export default PureCompo
