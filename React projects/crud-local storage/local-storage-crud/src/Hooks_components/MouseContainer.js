import React from 'react'
import { useState } from 'react/cjs/react.development'
import HookMouse from './HookMouse'

function MouseContainer() {
     const[display,setDisplay]=useState(true)
  return (
    <div>
     
      <button onClick={()=>(setDisplay(!display))}  >Toggle</button>
      {display && <HookMouse/>}
    </div>
  )
}

export default MouseContainer
