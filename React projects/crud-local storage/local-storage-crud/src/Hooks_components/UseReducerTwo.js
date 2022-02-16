import React from 'react'
import { useReducer } from "react"
let initial={
    firstCounter:0,
    secondCounter:10
}
function reducer(state,action){
    // console.log(state);
    console.log(action);
    switch(action.type){
        case 'increment':
            return {...state,firstCounter:state.firstCounter+action.value}
        case 'decrement':
            return {...state,firstCounter:state.firstCounter-action.value}
            case 'increment1':
                return {...state,secondCounter:state.secondCounter+action.value}
            case 'decrement1':
                return {...state,secondCounter:state.secondCounter-action.value}
        case 'reset':
            return initial
        default:
            return state
    }
    
}
console.log(initial);
// console.log(state);


function UseReducerTwo() {
    const[count,dispatch] = useReducer(reducer,initial)
  return (
    <div>
          <h1>{count.firstCounter},{count.secondCounter}</h1>

        <button  onClick={()=>(dispatch({type:'increment',value:1}))} >
            increment</button>
        <button  onClick={()=>(dispatch({type:'decrement',value:5}))} >
            decrement</button>
            <button  onClick={()=>(dispatch({type:'increment1',value:5}))} >
            increment5</button>
        <button  onClick={()=>(dispatch({type:'decrement1',value:5}))} >
            decrement5</button>
        <button  onClick={()=>(dispatch({type:'reset'}))} >
            reset</button>
        {/* <button  onClick={()=>(dispatch('def'))} >default</button> */}
      
    </div>
  )
}


export default UseReducerTwo;
