import React, { Component } from 'react'

 class User extends Component {
     //Render prop refers to atechnique for sharing code b/w react components using a prop whose value is a function
  render() {
    return (
      <div>
     
          <h1>     {this.props.render(true)}   </h1>
        
      </div>
    )
  }
}

export default User
