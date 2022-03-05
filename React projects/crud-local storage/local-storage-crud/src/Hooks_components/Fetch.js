import axios from 'axios'
import React, { useEffect, useState } from 'react'
//Fetching the random facts
function Fetch() {
    const[facts,setFacts]=useState([])
    const[id,setId]=useState(0)
    useEffect(
        ()=>{
            axios.get('https://uselessfacts.jsph.pl/random.json?language=en')
            .then((res)=>{
                console.log(res.data);
                console.log(res.data.text);
                
                facts.push(res.data.text);
                setFacts(facts)
                // setFacts(res.data.text)
               
            })
        },[id]
    )
  return (
    <div>
   <h3>Random Facts</h3>
  <h1>{facts.at(-1)}</h1>
  <button onClick={()=>{setId(id+1)}} >next</button>
  {console.log(typeof(facts))}
  <table>
    <thead>
    <tr><th>Facts</th></tr>
    </thead>
   
<tbody>
{facts.map((text,index)=>(<tr key={index}><td>{text}</td></tr>))}
</tbody>
   
      
  </table>
  
      
    </div>
  )
}

export default Fetch
