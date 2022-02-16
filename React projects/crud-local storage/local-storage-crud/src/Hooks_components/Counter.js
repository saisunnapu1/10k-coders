import React,{useState} from 'react'

function Counter() {
    let a=0
    const[count,newcount]=useState(a);
    const [name,setName]=useState({firstName:'',lastName:''})
   const incrementFive=()=>{
       for (let i=0;i<5;i++){
        newcount((prevCount)=>prevCount+1)
       }
  
    }
  return (
    <div>
        <h1>{count}</h1>
      <button onClick={()=>newcount(count+1)} >Increment</button>
      <button onClick={()=>newcount(count-1)} >Decrement</button>
      <button onClick={()=>newcount(a)} >Reset</button>
      <button onClick={incrementFive} >Increment 5</button><br></br>
      <input type="text" value={name.firstName} onChange={e =>setName({...name,firstName:e.target.value})} />
      <input type="text" value={name.lastName} onChange={e =>setName({...name,lastName:e.target.value})} />
      
      <h1>NAME:{name.firstName}{name.lastName}</h1>
      {/* <h2>{JSON.stringify(name)}</h2> */}


    </div>
  )
}

export default Counter;
