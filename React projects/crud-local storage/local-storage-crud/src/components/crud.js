import React from "react";
import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
import '../css/crud.css'
class Crud extends React.Component{
    constructor(props){
        super(props);
        this.state={
            studentData:[],
            act:0,
            index:''
        }
    
    }
 
    handleEdit=(i)=>{
       
        let studentData=this.state.studentData[i];
        console.log("editable1");
        this.refs.txtname.value=studentData.name;
        console.log("editable");
        this.refs.number.value=studentData.number;
        this.setState({
            studentData:studentData,
            act:1,
            index:i

           
        })


    }

      handleSubmit=(e)=>{
        e.preventDefault();

        let studentData=this.state.studentData;
        let name=this.refs.txtname.value;
        let number=this.refs.number.value;
            if(this.state.act === 0){
                let newStudent={
                    "name":name,
                    "number":number
                }
                studentData.push(newStudent);
                
               }
            else{
                let index=this.state.index;
                studentData[index].name=name;
                studentData[index].number=number;

            }
       
    
        this.setState({
            studentData:studentData,
            act:0
            

        })
        this.refs.myform.reset();
    }
  
   
    handleDelete=(i)=>{
        // alert("u want to delete");
        let studentData=this.state.studentData;
        studentData.splice(i,1);
        this.setState({
            studentData:studentData
        });
       
    }

    render(){
        let studentData=this.state.studentData;
        return(
           <>
           <form ref="myform">
               <label>Name</label>
                <input type="text" ref="txtname" placeholder='enter name'></input>
                <label>Mobile</label>
                <input type="text" ref="number" placeholder='enter number'></input>
                <button onClick={e=>this.handleSubmit(e)} >Save</button>
                
           </form>
           <table>

               <th>
                   <th>Name</th>
                   <th>Number</th>
               </th>
               <tr>
                   {
                       studentData.map((data,i)=>
                       <tr key={i}>
                           <td>{data.name}</td>
                           <td>{data.number}</td>
                            <td> 
                           <button onClick={e=>this.handleEdit(e)} >Edit</button>
                           </td>
                           
                           <td>
                           <button onClick={e=>this.handleDelete(e) }>Delete</button>
                           </td> 
                       </tr>
                       )
                   }
               </tr>
             

           </table>
           </>
        )
    }
}
export default Crud;
