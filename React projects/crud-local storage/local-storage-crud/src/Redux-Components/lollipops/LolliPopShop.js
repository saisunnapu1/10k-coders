import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import buypop from './LolliPopAction'

function LolliPopShop() {
    const NoOfPops=useSelector(state=>state.pop.NoOfPops)
    const dispatch=useDispatch()

  return (
    <div>
        <h1>Lollipops</h1>
        <h2>{NoOfPops}</h2>
     
        <button onClick={
            ()=>dispatch(buypop())
        } > Buy lollipops</button>
      
    </div>
  )
}

export default LolliPopShop
