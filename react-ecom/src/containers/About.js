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
import React,{Component} from "react";
class About extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            about:"i m sai rendered from about page"
        };
        this.UpdateState=this.UpdateState.bind(this);
   console.log(props);
    }
    UpdateState(){
      this.setState({about:"i have been updated"});
    }
    render(){
        return(
            <>  
            <h1>{this.state.about}</h1>
            <button onClick={this.UpdateState}>Click me</button>
            <h1>devops:  {this.props.developer}</h1>

            </>
        )
    }
}
export default About;