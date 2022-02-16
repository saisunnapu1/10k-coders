import { useReducer } from "react"
import React from "react"
let initial=0
function reducer(state,action){
    // console.log(state);
    console.log(action);
    switch(action){
        case 'increment':
            return state+1
        case 'decrement':
            return state-1
        case 'reset':
            return initial
        default:
            return state
    }
    
}
console.log(initial);
// console.log(state);
function UseReducer() {
  const[count,dispatch] = useReducer(reducer,initial)

  return (
    <div>
        <h1>{count}</h1>
        <button  onClick={()=>(dispatch('increment'))} >increment</button>
        <button  onClick={()=>(dispatch('decrement'))} >decrement</button>
        <button  onClick={()=>(dispatch('reset'))} >reset</button>
        <button  onClick={()=>(dispatch('def'))} >default</button>
    </div>
  )
}

export default UseReducer
