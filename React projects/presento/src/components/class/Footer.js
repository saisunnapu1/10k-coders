import React  from "react"
class Footer extends React.Component{
    constructor(){
        super();
        this.about={name:"Sai",
    stram:"EEE"
  

}
    
      
    
    }

    render(){
        return(  
            <>     
        <h1>hai i m sai</h1>
        <h1>{this.about.name} Came from background {this.about.stram}</h1>
        <h1>hai i m sai</h1>
                
        
      
    
    </>
    
        )
    }
}
export default Footer;