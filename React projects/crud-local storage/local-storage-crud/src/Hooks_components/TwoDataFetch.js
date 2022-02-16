import axios from 'axios'
import React, { useEffect, useState } from 'react'

function TwoDataFetch() {
    const[posts,setPosts]=useState([])
    useEffect(
        ()=>{
            axios.get('https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand')
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setPosts(res.data)
               
            })
        },[]
    )
  return (
    <div>
        <h1>hai</h1>
        {/* <h1>{posts[3].id}</h1> */}

    </div>
  )
}

export default TwoDataFetch
