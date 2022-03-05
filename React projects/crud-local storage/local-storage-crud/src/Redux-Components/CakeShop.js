import React from 'react'
import { connect } from 'react-redux'
import { useSelector ,useDispatch} from 'react-redux'
import buyCake,{returnCake} from './Cakes/CakeActions'
//  import buyCake from './redux'



  // class  CakeShop extends React.Component {
  //   constructor(props) {
  //     super(props)
    
  //     this.state = {
         
  //     }
  //   }
    function CakeShop(props){
      const NoOfCakes=useSelector((state)=>
      state.NoOfCakes
      
);

      return (

        <div>
        {/* <h1>Cake shop--{props.NoOfCakes.NoOfCakes}</h1> */}
      <h1>Cake{props.NoOfCakes}</h1>
        <h1>No of Cakes in store--{props.NoOfCakes}</h1>
        <h1>Cakes Buyed by customer--{props.CakeAcquired}</h1>
        <button onClick={props.buyCake}>Buy</button>
        <button onClick={props.returnCake} >Return</button>
        </div>
      
      )


   }
    
//     render(){
//       return (

//         <div>
//         <h1>Cake shop--{this.props.NoOfCakes}</h1>
//         <button onClick={this.props.buyCake}>cakes</button>
//         </div>
      
//       )
//     }
  
   


// }

const mapStateToProps= state=>{
    return{
       NoOfCakes:state.NoOfCakes,
       CakeAcquired:state.CakeAcquired
    }
}
const mapDipatchToProps=dispatch=>{
    return{
        buyCake:()=>dispatch(buyCake()),
        returnCake:()=>dispatch(returnCake())
    }
}
export default connect(mapStateToProps,mapDipatchToProps)(CakeShop)
// export default connect(mapDipatchToProps)(CakeShop)
// export default CakeShop
