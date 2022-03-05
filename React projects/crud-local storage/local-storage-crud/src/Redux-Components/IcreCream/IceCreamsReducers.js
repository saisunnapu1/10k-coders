import { BUY_ICECREAM } from "./IceCreamType"

const initialState={
    NoOfIceCreams:200
}
const iceCreamReducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_ICECREAM:
            return{
                ...state,
                NoOfIceCreams:state.NoOfIceCreams-1
            }
            default:return state
    }
    

}
export default iceCreamReducer;