// import ApiActions from "./ApiAction"
import fetchData from "./ApiAction"
import { NEXT } from "./ApiAction"

const initialState={
    ApiData:[{
        name:"sai",
        roll:99
    }]
}
 const  apiReducer=(state=initialState,action)=>{
    console.log(state);
    console.log(action);
    console.log(action.type);

    console.log("i m from reducer")
    switch(action.type){
        case NEXT:
            console.log(state); 
             
            
            return {
                
                 ...state,
                ApiData:action.payload
            }
            default:return state
    }
  
}
console.log(apiReducer);
export default apiReducer
// console.log(FetchData)
// console.log(ApiReducer);
console.log(apiReducer);