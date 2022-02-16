import React, { useEffect, useState } from 'react'

function TimerHooks() {
    const[timer,setTimer]=useState(0)
    const tick=()=>{ 
        if(timer<10){
            setTimer(timer+1)
        }
       
    }
    useEffect(
       ()=>{
           const interval=setInterval(tick,1000)
           return()=>{
               clearInterval(interval)
           }
       },[timer]
    )
  return (
    <div>
        {timer}
       { timer>8 && <h1>welcome to Coder Community sai</h1>}
      
    </div>
  )
}

export default TimerHooks
