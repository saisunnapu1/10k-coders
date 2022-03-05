import { render } from '@testing-library/react';
import React, { Component } from 'react'

export class File extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:"",
         comments:"",
         topic:"react"
         
      }
    }
    handlerChange=(event)=>{
       
        
        console.log(event.target.value);
        this.setState({
        username:event.target.value,
         
      
    
        })
    }

     handleTextChange=(event)=>{
            this.setState({
                comments:event.target.value
            })
        
    }
    handleTopicChange=(event)=>{
        this.setState({
            topic:event.target.value
        })
    }

    handleSubmit=(event)=>{
        alert(`${this.state.username}`)
        event.preventDefault();
    }
  render() {
      
    return (
     <form onSubmit={this.handleSubmit} >
         <div>
             <label>USERNAME</label>

             <input type="text" value={this.state.username} onChange={this.handlerChange} />
           
         </div>
         <div>
             <label>Comments</label>
             <textarea value={this.props.comments} onChange={this.handleTextChange} >Text area comments</textarea>

         </div>
         <div>
             <label>Topic</label>
             <select value={this.state.topic} onChange={this.handleTopicChange} >
                 <option value="react" >React</option>
                 <option value="angular" >Angular</option>
                 <option value="view js" >View Js</option>
             </select>
         </div>
         <button type='submit' >Submit</button>
     </form>
    )
  }
}

export default File
