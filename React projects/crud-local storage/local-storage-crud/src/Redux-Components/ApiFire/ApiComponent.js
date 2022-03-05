import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { useSelector,useDispatch} from 'react-redux'
import fetchData from './ApiAction'

function ApiComponent() {
    const[posts,setPosts]=useState([])
      const data=useSelector(state=>state.ApiData)
      const dispatch=useDispatch()

    useEffect(
        ()=>{
            axios.get('https://gorest.co.in/public/v2/posts').
            then((res)=>{
                // console.log(res.data);
                // console.log(res.data[0]);
                setPosts(res.data)
            })
        },[]
    )

  return (
    <div>
      <h1>API fire</h1>
      {console.log(posts)}
        {/* <ul>
        {
            posts.map((posts,id)=>(<li key={id} >
                {posts.id}
            </li>))
        }
    </ul>  */}
    {/* <h1>{data}</h1> */}
    {/* {data && <h1>{data}</h1>} */}
    {/* <h1>{data}</h1> */}




     <ul>
        {
            data.map((data,id)=>(<li key={id} >
                {data.title}
            </li>))
        }
        
    </ul> 

        <button onClick={
            ()=>dispatch(fetchData(posts))
        } > data to be fetched</button>

    </div>
  )
}

export default ApiComponent
