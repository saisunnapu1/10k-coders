import React from 'react'
import { useSelector } from 'react-redux'

function HooksIceCreamShop() {
    const NoOfIceCreams=useSelector(state=>state.NoOfIceCreams)
  return (
    <div>
        <h1>Ice cream shop</h1>
        <h2>{NoOfIceCreams}</h2>
      
    </div>
  )
}

export default HooksIceCreamShop
