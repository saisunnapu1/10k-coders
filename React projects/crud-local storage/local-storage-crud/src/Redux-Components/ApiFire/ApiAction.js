// import React, { useState,useEffect } from 'react'
// import axios from 'axios'
// // import axios from 'axios'
// // import React, { useEffect,useState } from 'react'

// // function ApiActions() {
// //     const[posts,setPosts]=useState([])

// //     useEffect(
// //         ()=>{
// //             axios.get('https://gorest.co.in/public/v2/posts').
// //             then((res)=>{
// //                 console.log(res.data);
// //                 console.log(res.data[0]);
// //                 setPosts(res.data)
// //             })
// //         },[]
// //     )

// //   return (
// //     <div>
// //       <h1>API fire</h1>
// //         <ul>
// //         {
// //             posts.map((posts,id)=>(<li key={id} >
// //                 {posts.id}
// //             </li>))
// //         }
// //     </ul> 
      

// //     </div>
// //   )
// // }
// //export default ApiActions
// // import React, { useState,useEffect } from 'react'

// export const NEXT='NEXT'
// const FetchData=()=>{


//     const[posts,setPosts]=useState([])

//     useEffect(
//         ()=>{
//             axios.get('https://gorest.co.in/public/v2/posts').
//             then((res)=>{
//                 console.log(res.data);
//                 console.log(res.data[0]);
//                 setPosts(res.data)
//             })
//         },[]
//     )


//     return({
    
//             type:NEXT,
//             payload:posts
        
       
        
//     })
// }
// export default FetchData


export const NEXT='NEXT'
const fetchData=(posts)=>{
    console.log("i m action");
    console.log(posts);
    return({
        type:NEXT,
        payload:posts
    })
}
export default fetchData
