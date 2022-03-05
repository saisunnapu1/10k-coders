import React from 'react'
import './styles/stylesheet.css'

const h2={
    fontSize:'72px',
    color:'red'
}

function Stylesheet(props) {
    let className =props.Color?"primary":" "
  return (
    <div>
      <h1  className={className} >I m a stylesheet regular style</h1>
      <h1>{className}</h1>
      <h2 style={h2} >Inline styles</h2>
         {/* inline css:specified as a object 
         and it is a camelcase procedure(keys)like above fontSize is a camel case  */}
    </div>
  )
}

export default Stylesheet
