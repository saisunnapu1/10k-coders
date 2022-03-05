import React from 'react'
import { useSelector,useDispatch} from 'react-redux'
import buyCake,{returnCake} from './CakeActions'

function HooksCakeShop() {
    const NoOfCakes=useSelector(state=>state.cake.NoOfCakes)
    const dispatch=useDispatch()
  return (
    <div>
        <h1>Using react Redux hooks </h1>
         
       <h1>Cakes</h1>
        <h1>{NoOfCakes}</h1>
        <button onClick={
            ()=>dispatch(buyCake())
        } > React redux hook</button>
      
    </div>
  )
}

export default HooksCakeShop
