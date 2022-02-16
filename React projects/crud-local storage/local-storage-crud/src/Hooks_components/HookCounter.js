import React, { useEffect, useState } from 'react'

function HookCounter() {
    const [count,setCount]=useState(0)
    const[name,setName]=useState('')
    useEffect(
        
        ()=>{
            console.log(" use effectdocument title updating")
            document.title=`you clicked ${count} times`}
   ,[count] )
   //for conditionally executing use effect we pass 2nd paprameter
   //this parameter is a array.this specyfies either props or states that we neeed to watch for
   //for our example we need use effect only when count value changes
   //in the array we included the count
   //if count doesnot changed useEffect wil not run..(good optimatization techinque)
  return (
    <div>
        <input type='text' value={name} onChange={e=>setName(e.target.value)} />
      <button onClick={()=>setCount(count+1)} >Click{count}</button>
    </div>
  )
}

export default HookCounter
