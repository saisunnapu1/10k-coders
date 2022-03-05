import React, { useState } from 'react'
import { useSelector,useDispatch} from 'react-redux'
import buyCake from './CakeActions'

function NewCakeContainer() {
    const[number,setNumber]=useState(4)
    const NoOfCakes=useSelector(state=>state.cake.NoOfCakes)
    const dispatch=useDispatch()
  return (
    <div>
        <h1>Using react Redux hooks </h1>
         
       <h1>Cakes</h1>
        <h1>{NoOfCakes}</h1>
        <input  type='text' value={number} onChange={e=>setNumber(e.target.value)} />
        <button onClick={
            ()=>dispatch(buyCake(number))
        } > Buy {number} Cakes</button>
      
    </div>
  )
}

export default NewCakeContainer
