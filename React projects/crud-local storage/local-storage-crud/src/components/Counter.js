import React, { Component } from 'react'

 class Counter extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          count:1,
          cost:500
       }
     }
    increment(){
        
        this.setState({

            count:this.state.count+1,
            cost:this.state.cost+500
            
        },()=>{console.log(this.state.count,"callback back function")})   
        console.log(this.state.count);    
        
    }
    decrement(){
        if(this.state.count>1){
        this.setState({
            
            count:this.state.count-1,
            cost:this.state.cost-500
            
        })  }     
    }
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
  
     
  render() {
    return (
      <div>
        <div>Count-{this.state.count}</div>
        <div>Total cost-{this.state.cost}</div>
        <button onClick={()=>this.incrementFive()} >increment</button>
        <button onClick={()=>this.decrement()} >decrement</button>
      </div>
    )
  }
}

export default Counter
