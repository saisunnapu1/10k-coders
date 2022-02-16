import { keyboard } from '@testing-library/user-event/dist/keyboard'
import React, { useState } from 'react'

function HooksCount() {
    let initial=[]
    const[items,setItems]=useState(initial)
   let addItem=()=>{
        setItems([...items,{
            // id:items.length,
            value:Math.floor(Math.random()*10)+1
        }])
    }
  return (
    <div>
        <button onClick={addItem} >Add a number</button>
        <ul>
            {items.map((item)=>(
            <li>{item.value}</li>
            ))}
        </ul>
 <button onClick={()=>setItems(initial)} >Clear</button>
      
    </div>
  )
}

export default HooksCount
