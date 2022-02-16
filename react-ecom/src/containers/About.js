// import "../css/about.css"
// let About=()=>{
//     return(
//         <>
//         <h1 className="abot" >
//         About page is empty
//         </h1>
//         </>
//     )
// }
// export default About;
import p1 from '../Images/phone1.png';
import React,{Component} from "react";
import axios from 'axios';
class About extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            about:"sai",
            number:1,
            price:500,
            message: "This is initial message1",
            phone:"vivoo",
            users:[],
            posts:[],

        };
        // this.state={
        //     users:[],
        // };
       
        
        this.UpdateState=this.UpdateState.bind(this);
        this.Increment=this.Increment.bind(this);
        this.Decrement=this.Decrement.bind(this);
   console.log(props);
    }
    componentWillMount() {
        this.setState({ message: "This is an updated message" });
    }
    componentDidMount() {
        setTimeout(() => {
          this.setState({phone: "Iphone"})
        }, 2000);
        // API calls
        //fetch is a browser method it will get data from API (Backend)(browser native library)
        fetch('https://jsonplaceholder.typicode.com/users').then(
            (response)=>response.json()
        ).then(response=>this.setState({users:response}));
        // axios is a light weight library.used for pull data from server to client
        // axios---->ASYNC and AWAIT
        //Async helps us to make calls from client to server
        //Await is responsible for completing the particular request 
        
        axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            this.setState({posts:res.data});
        })

           
      }


    UpdateState(){
      this.setState({about:"i have been updated"})

    }
// ---------------------------------------------------



// --------------------------------------------------------------------
    Increment(){
        
        this.setState({number:this.state.number+1})
        this.setState({price:this.state.price+500})
    }
    Decrement(){
        if(this.state.number>1){   
        this.setState({number:this.state.number-1})
        this.setState({price:this.state.price-500})
       
    }
    }
 
    render(){
        return(
            <>  
          
            <h1>devoloper:  {this.props.developer}</h1>
            <div className='row'>
                <div className='col-sm-4'>
                <img src={p1} />
                </div>
                <div className='col-sm-2'>
                    <h1>hunsui </h1>
                  <p className=''>The Samsung Galaxy Pocket S5300 is good choice for those transitioning from feature phones to smartphones. The Samsung smartphone runs on a powerful 832 MHz ARM11 processor that handles an array of applications with ease.</p>
                  <h3>Price :  {this.state.price}</h3>
                  <p>Quantity:{this.state.number}</p>
                  <button className='px-2' onClick={this.Increment}>+</button>
                  
            <button className='mx-2 px-2' onClick={this.Decrement}>-</button>
            <p>{this.state.message}</p>

                    </div>
                    {/* <div className='col-sm-2'>
                        <h1>{this.state.phone}</h1>

                    </div> */}
                   
                    <div className='row'>
                    <div className='col-sm-4'>
                       <h1>User names</h1>
                       <ul>{this.state.users.map(s=><li>{s.name},{s.email},{s.username}</li>)}</ul>
                    </div>
                        <div className='col-sm-4'>
                            <h1>complete address</h1>
                            
                        <ul>{this.state.users.map(s=><li>{s.address.street},{s.address.suite},{s.address.city},{s.address.zipcode}</li>)}</ul>

                        </div>
                        <div className='col-sm-4'>
                            <h1>geographical locaton</h1>
                            
                        <ul>{this.state.users.map(s=><li>{s.address.geo.lat},{s.address.geo.lng}</li>)}</ul>

                        </div>

                    </div>
                   
            <section className='row'>
                <section className='col-sm-4'>
                    <h2>Fetching the data by using the get method in axios</h2>
                    <ul>
                        
                       {this.state.posts.map((d)=>(
                           <li>{d.title}</li>
                       ))}
                    </ul>

                </section>

            </section>
            <input type="text" id="fname" onchange="myFunction()"/>
            </div>
            

            </>
        )
    }
}
export default About;