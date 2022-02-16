import React, { createContext } from 'react'
import { useReducer } from "react"
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
export const CountContext=createContext();

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

function ComponentAll() {
    const[count,dispatch]=useReducer(reducer,initial)
  return (
    <div>
       
        <CountContext.Provider value={{countState:count,countDispatch:dispatch }}>
            Count-{count}
          <ComponentA/>
          <ComponentB/>
      
        </CountContext.Provider>
      
    </div>
  )
}

export default ComponentAll
