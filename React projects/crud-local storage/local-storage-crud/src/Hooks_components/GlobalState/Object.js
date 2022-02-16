import React from 'react'
let Products=[
    {
       ProductName:"vivo-11",
       
       type:"mobile"

    },
    {
        ProductName:"vivo-12",
        type:"mobile"
 
     },
     {
        ProductName:"vivo-13",
        type:"mobile"
 
     },
     {
        ProductName:"vivo-14",
        type:"mobile"
 
     },
     {
        ProductName:"vivo-15",
        type:"mobile"
 
     },
   
]

function Object() {
  return (
    <div>
      <ul>
          {Products.map((Products)=>(
          <li>{Products.ProductName}</li>
          ))}
      </ul>
    </div>
  )
}

export default Object
