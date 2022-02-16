import React, { useEffect, useState } from 'react'

function HookMouse() {
    const[x,setX]=useState(0)
    const[y,setY]=useState(0)
    const logPointer=e=>{
        console.log("mouse movement")
        setY(e.clientY)
        setX(e.clientX)
    }
    useEffect(
        ()=>{
            console.log("use eefect")
            window.addEventListener('mousemove',logPointer)
            return()=>{
                console.log("component unmount code")
                window.removeEventListener('mousemove',logPointer)
            }
        }
    ,[])
  return (
    <div>
        <h1>mouse moment using hooks</h1>
      HOOKS X:{x} Y:{y}
    </div>
  )
}

export default HookMouse
