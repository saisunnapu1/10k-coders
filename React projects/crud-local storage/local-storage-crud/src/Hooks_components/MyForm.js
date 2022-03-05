import React from 'react'
import { useState } from "react";

function MyForm() {
    const [name, setName] = useState("");
    
  const handleSubmit = (event) => {
      console.log("im")
   alert("hii")
    // alert(`The name you entered was: ${name}`);
    //  event.preventDefault();
  }


  return (
    <div>
       <form onSubmit={handleSubmit} >
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </form>
    {console.log(name)}
    <h1>{name}</h1>
    <input type="submit" />
    </div>
  )
}

export default MyForm
