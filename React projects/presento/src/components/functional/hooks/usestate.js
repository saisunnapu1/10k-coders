import React, { useState,useEffect} from "react";
import ReactDOM from "react-dom";
import pic from '../../assets/img/watch.png';


function FavoriteColor() {
  // const [count, setCount] = useState(0);
  const [count, setCount] = useState(1);
  const[timer,setTimer]=useState(1);
  const [calculation, setCalculation] = useState(500);
  const mystyle = {
    color: "red",
  };
  const btn={
    color: "red",
  };
 
 
 

    const [color, setColor] = useState("Friends");
    

    useEffect(() => {
      setCalculation(() => count * 500);
    }, [count]); 
  useEffect(()=>{
    console.log("use effect");
    
  
     setTimeout(() => {
       if(timer<10){
      setTimer((timer) => timer + 1);}
    }, 5000);
    
  })

   
  
    return (
      <>
      <h1 className="text-center color-primary" >HOOKS IN REACT</h1>
        <section className="row bg-danger">
          <section className="col-sm-3">
          {/* <h1 className="text-center">USE EFFECT</h1> */}
          <h2 className="">Favourite song</h2>
          <h1>{color}</h1>
          <button
          type="button"
          onClick={() => setColor("Infinity")}
        >infinity</button>
        <button
          type="button"
          onClick={() => setColor("Entertainer")}
        >Entertainer</button>
        <button
          type="button"
          onClick={() => setColor("Cold PLay")}
        >Cold play</button>
        <button
          type="button"
          onClick={() => setColor("Be mine")}
        >Be mine</button>

          </section>
         
          <section className="col-sm-3">
           
        <img src={pic}/>
        <h1>Hunsui Smart watch</h1>
        <p style={mystyle}>Quantity: {count}</p>
        <h1>Total cost  </h1>
        <h2>${calculation}</h2>
      <button   style={btn} onClick={() => setCount((c) => c + 1)}>ADD</button>
      <button style={btn} onClick={  
  
        () => setCount((c) => c - 1)
        }>Remove</button>
      {/* <p>Calculation: {calculation}</p> */}
            
            </section>
            <section className="col-sm-3">
          
          <h1>Seconds:{timer}</h1>
          
          
         </section>
         <section className="col-sm-3">
         {/* <button onClick={sayHello}>
      Click me!
    </button> */}

         </section>
        </section>

      </>
      
    );
  }
  export default FavoriteColor;
  