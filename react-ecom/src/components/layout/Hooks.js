import React, { useEffect, useState } from 'react'

function Hooks() {
    let [count,setCount]=useState(0);
//Real time use state Example
let[user,updateUser]=useState({
    name:"sai",
    mail:"sai@gmail.com",
    number:88
})
// console.log(user);
let[posts,updatePosts]=useState({});
console.log(posts);

//UseEffect
useEffect(()=>{
    //api calls
    fetch('https://jsonplaceholder.typicode.com/posts').then(//component did update
        (response)=>response.json()
    ).then(response=>updatePosts(response));
    console.log(posts);
    window.addEventListener("click",()=>{console.log("capturing")});
    return()=>{//component will unmount
        window.addEventListener("click",()=>{
            console.log("remove capture");
        });
    }


},[]);//[]--component will unmount



    //ES6 Destructuring
//   let student=["sai","sai@gmail.com",99]
//   let [name,mail,roll]=student
//   console.log(mail,roll);
  //ES5 
//   let name1=student[0];
//   let mail1=student[1];
//   let roll1=student[2];
//   console.log(mail1," and his ",name1);


 

  return (
    <div>
        {console.log(posts)}
      <h1>hai i m a hooks  {count}</h1>
     <h1>{user.name}</h1>
      <button onClick={()=>{setCount(count+1)}} >Click me</button>
      <button onClick={()=>updateUser({
          name:"kiran",
          mail:"kiran@gmail.com",
        //   number:100
      })} >Update</button>
      {/* <ul>{user.map((d)=>{
          <li>{d.name}"and"{d.mail}</li>
      })}</ul>
    */}

    {/* <h1>List of posts</h1>
    <ul> 
    {posts.length > 0 ? (posts.map((d) => <li key={d.id}>{d.id}</li>)):(
        <li>No records</li>
    )}
     </ul> */}
   <section className='container' >
       <section className='row' >
       <h1>List of posts</h1>
           <section className='col-sm-4 tet-center' >
                     <ul> 
                    {posts.length > 0 ? (posts.map((d) => <li key={d.id}>{d.title}</li>)):(
                        <li>No records</li>
                    )}
                    </ul>
           </section>
           {/* <section className='col-sm-4 ' >
                     <ul> 
                    {posts.length > 0 ? (posts.map((d) => <li key={d.id}>{d.title}</li>)):(
                        <li>No records</li>
                    )}
                    </ul>
           </section> */}

       </section>

   </section>


    </div>
  )
}

export default Hooks;
