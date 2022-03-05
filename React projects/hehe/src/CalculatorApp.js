import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {loadAns, loadBackspace, loadButtons,loadClear} from './redux/actions.js'


function CalculatorApp() {
    const dispatch=useDispatch()
    const viewCalculator=useSelector((state)=>state)
  return (
    <div  >
      {/* <pre>{JSON.stringify(viewCalculator)}</pre> */}
      {/* <h1>CalculatorApp</h1> */}
      <section className='bg-secondary w-25 align-center keypad' >
     
      <input
      type="text"
      value={(viewCalculator.ans).length===0 ?viewCalculator.number:viewCalculator.ans}
      placeholder="0"
      className='mt-4 px-4 py-3 text-primary h5 search'
      
      /><br></br>
      <button onClick={()=>dispatch(loadButtons(0))} className='my-3 mx-2 bg-danger text-white px-3' >0</button>
      <button onClick={()=>dispatch(loadClear())}  className='mx-3 my-3 px-3 bg-danger text-white' >c</button>
     
      <button onClick={()=>dispatch(loadBackspace())}  className='my-3 mx-2 px-3 bg-danger text-white' >B</button>
      <button onClick={()=>dispatch(loadButtons('*'))} className='my-3 mx-2 px-3 bg-danger text-white ' >*</button><br></br>
      <button onClick={()=>dispatch(loadButtons(1))} className='my-3 mx-2 px-3'  >1</button>
      <button onClick={()=>dispatch(loadButtons(2))} className='my-3 mx-2 px-3' >2</button>
      <button onClick={()=>dispatch(loadButtons(3))} className='my-3 mx-2 px-3' >3</button>
      <button onClick={()=>dispatch(loadButtons('+'))} className='my-3 mx-2 px-3 bg-danger text-white' >+</button><br></br>
      <button onClick={()=>dispatch(loadButtons(4))} className='my-3 mx-2 px-3' >4</button>
      <button onClick={()=>dispatch(loadButtons(5))} className='my-3 mx-2 px-3' >5</button>
      <button onClick={()=>dispatch(loadButtons(6))} className='my-3 mx-2 px-3' >6</button>
      <button  onClick={()=>dispatch(loadButtons('-'))} className='my-3 mx-2 px-3 bg-danger text-white' >-</button><br></br>

      <button onClick={()=>dispatch(loadButtons(7))} className='my-3 mx-2 px-3' >7</button>
      <button onClick={()=>dispatch(loadButtons(8))} className='my-3 mx-2 px-3' >8</button>
      <button onClick={()=>dispatch(loadButtons(9))} className='my-3 mx-2 px-3' >9</button>
      
      <button onClick={()=>dispatch(loadButtons('/'))} className='my-3 mx-2 px-3 bg-danger text-white' >%</button><br></br>
      <button onClick={()=>dispatch(loadAns())} className='my-3 mx-2 px-3 py-2 bg-danger text-white rounded-right w-25' >=</button>
      
       
      </section>
      {/* <button onClick={}>1</button>
      <button onClick={}>1</button> */}
     </div>
  )
}

export default CalculatorApp
