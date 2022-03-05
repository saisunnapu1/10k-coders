import { BUY_CAKE,RETURN_CAKE } from "./CakeType"
const initialState={
    NoOfCakes:10,
    CakeAcquired:0,
}
const cakeReducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_CAKE:
        return {
            ...state,
            NoOfCakes:state.NoOfCakes-action.payload,
            CakeAcquired:state.CakeAcquired+1
        }
        case RETURN_CAKE:
            // console.log(CakeAcquired);
            return {
           
                    ...state,
                    NoOfCakes:state.NoOfCakes+1,
                    CakeAcquired:state.CakeAcquired-1
                
              
            }
        default:return state

    }
      
}
export default cakeReducer;