import React, { useContext, useState } from 'react'
import{serviceListContext} from './services.js'



function StateManagement() {
    const[inputValue,setInputValue]=useState("");
    const{addService}=useContext(serviceListContext);
  return (
    <div>
             <input type="text"
        value={inputValue}
        placeholder="enter new service name"
        onChange={(e)=>setInputValue(e.target.value)} />
        <button onClick={()=>{addService(inputValue);
        setInputValue('');
        console.log(inputValue)
        }} >Add service</button>
    </div>
  );
};

export default StateManagement
