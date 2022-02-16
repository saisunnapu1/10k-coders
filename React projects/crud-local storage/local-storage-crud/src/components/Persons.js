import React from 'react'

function Persons({employee}) {
  return (
    <div>
  <h1>I m {employee.name} and salary {employee.salary}</h1>
    </div>
  )
}

export default Persons
