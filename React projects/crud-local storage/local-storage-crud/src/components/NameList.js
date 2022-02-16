import React from 'react'
import '../css/namelist.css';
import Persons from './Persons';

function NameList() {
    // let name=["sai","ram","len","fen","mon"]//array of elements
    // let nameList=    name.map((name)=><h1>{name}</h1>);//variable 
    //map accepts function as arguments
    let employee=[
        {
            id:1,
            name:"grace",
            salary:50000
        },
        {
            id:2,
            name:"roby",
            salary:60000
        },
    ]
   let persons=[
       {
           id:1,
           name:'sai',
           age:21,
           skill:'React'
       },
       {
        id:2,
        name:'fem',
        age:21,
        skill:'Angular'
    },
    {
        id:3,
        name:'sai',
        age:21,
        skill:'React'
    },
    {
     id:4,
     name:'jen',
     age:21,
     skill:'Angular'
 },
 {
    id:5,
    name:'sai',
    age:21,
    skill:'React'
},
{
 id:6,
 name:'ke',
 age:21,
 skill:'Angular'
}
   ]
   let PersonList=persons.map((person,index)=>(
       <h2 key={index}> I am {person.name},  I am {person.age} years old, I m good at {person.skill}</h2>
   ))
// let PersonList=persons.map((persons)=>(<table><tr><td>{persons.name}</td><td>{persons.skill}</td></tr></table>))
// let employeeList=employee.map((
//     employee=><Persons employee={employee} />

// ))
let employeeList=employee.map((employee)=>(
<Persons employee={employee} key={employee.id}/>
))
  return (
    <div>
            {/* <h1>{name[0]}</h1>
            <h1>{name[1]}</h1>
            <h1>{name[2]}</h1> */}
        
        {PersonList}
        
        <table>
            <tbody>   
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>AGE</th>
                <th>SKILL</th>
                <th>INDEX</th>
            </tr>
            {persons.map((persons,index)=>(
                   
                     <tr key={index}>
                         
                         <td>{persons.id}</td>
                         <td>{persons.name}</td>
                         <td>{persons.age}</td>
                         <td>{persons.skill}</td>
                         <td>{index}</td>
                        
                     </tr>
                     
                   
            ))}
            </tbody>
        </table>
        {employeeList}
      
    </div>
  )
}

export default NameList
