import React from 'react'

function FunctionClick() {
    function Handler(){
        console.log("button clicked ")

    }
 
  return (
    <div>
      <button onClick={Handler} >Click</button>
    </div>
  )
}

export default FunctionClick
