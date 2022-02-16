import React, { Component } from 'react'

 class EventBind extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          message:"Subscribe",
          message1:"youtube"

       }
       this.clickHandler=this.clickHandler.bind(this);

     }
     clickHandler(){
         this.setState({
             message:"Thank you For subscription"
         })
     }
     clickHandler1 =()=>{
         this.setState({
             message1:"twitter",
         })
     }
     
  render() {
    return (
      <div>
          <h1>{this.state.message}</h1>
          <h1>{this.state.message1}</h1>
          {/* <button onClick={this.clickHandler.bind(this)} >Click me Event bind</button> */}
          {/* <button onClick={()=>this.clickHandler()} >Click me Event bind</button> */}
            <button onClick={this.clickHandler} >Click me Event bind</button> 
            <button onClick={this.clickHandler1} >Click me Event bind</button> 
        
      </div>
    )
  }
}

export default EventBind
