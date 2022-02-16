import React, { useEffect, useState } from 'react'
import axios from 'axios'


function DataFetching() {
    const[animal,setAnimal]=useState([])
    const[count,setCount]=useState([])
    useEffect(
        ()=>{
            axios.get('https://zoo-animal-api.herokuapp.com/animals/rand')
            .then(res=>{
              console.log(res)
              setAnimal(res.data)
              
            })
        },[count]
    )
  return (
    <div>
      <h3>ZOO ANIMALS</h3>
      <h1>{animal.name}</h1>
      <button  onClick={()=>{setCount(count+1)}} >Next</button><br></br><br></br>
      <img style={{width: '50%', height: '500px'}}
      src={animal.image_link}
      alt="new"
      />
      <h1>{animal.animal_type},{animal.lifespan}</h1>
      
    
      
    </div>
  )
}

export default DataFetching
