import React, { Component } from 'react'

export class RegularCompo extends Component {
  render() {
    console.log("............Regular Component..............")
    return (
      <div>
        <h1>Regular component {this.props.name}</h1>
      </div>
    )
  }
}

export default RegularCompo
