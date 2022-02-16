import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UseEffectFetch() {
    const[posts,setPosts]=useState([])
    const[id,setId]=useState(1)
    const[idFromButton,setIdFromButton]=useState(1)
    
 useEffect(
     ()=>{
         axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
         .then(res=>{
             setPosts(res.data)
             console.log(res.data);
         })
     },[idFromButton]
 )

//  useEffect(
//     ()=>{
//         axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
//         .then(res=>{
//             setPosts(res.data)
//             console.log(res.data);
//         })
//     },[id]
// )

 let  handleClick=()=>{
     setIdFromButton(id)
 }
  return (
    <div>
    <h1>fetch datas</h1>
    <input type="text" value={id} onChange={(res)=>setId(res.target.value)} />
    <button onClick={handleClick} >fetch</button>
    <div>{posts.title}</div>
    {/* <ul>
        {
            posts.map((posts,id)=>(<li key={id} >
                {posts.title}
            </li>))
        }
    </ul> */}
     
    </div>
  )
}

export default UseEffectFetch;
