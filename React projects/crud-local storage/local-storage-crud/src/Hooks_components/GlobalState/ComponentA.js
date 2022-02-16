import React,{useContext} from 'react'
import { CountContext } from './ComponentAll'

function ComponentA() {
  const countContext=useContext(CountContext)
  return (
    <div>
      ComponentA .
    <button  onClick={()=>(countContext.countDispatch('increment'))} >increment</button>
        <button  onClick={()=>(countContext.countDispatch('decrement'))} >decrement</button>
        <button  onClick={()=>(countContext.countDispatch('reset'))} >reset</button>
        {/* <button  onClick={()=>(dispatch('def'))} >default</button> */}
      
    </div>
  )
}

export default ComponentA
