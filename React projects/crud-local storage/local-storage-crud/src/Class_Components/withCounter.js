//HOC:  Its a pattern where a function takes component as a argumment and return a new component 
//const NewComponent=hoc(originalComponent)
//const ironMan=withSuit(TonyStark)
import React from 'react'

const withCounter=(WrappedComponent)=>{



class WithCounter extends React.Component{
    constructor(props) {
        super(props)
      
        this.state = {
           count:0,
        }
      }

      handleCounter=()=>{
        this.setState(prevState=>{
            return{count:prevState.count+1}
        })
    }

    render(){
        return <WrappedComponent name="sai"count={this.state.count} handleCounter={this.handleCounter}    />
    }
}
return WithCounter
}
export default withCounter