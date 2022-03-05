
import  { BUY_POP } from "./LolliPopAction"
const initialState={
    NoOfPops:1000
}
const buyPop=(state=initialState,action)=>{
    switch(action.type){
        case BUY_POP:
            return{
                ...state,
                NoOfPops:state.NoOfPops-1,
            }
            default:return state
    }

}
export default buyPop