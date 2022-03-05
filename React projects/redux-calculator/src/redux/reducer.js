import {SPIN_ANS,SPIN_BACKSPACE,SPIN_BUTTONS,SPIN_CLEAR} from "./actions.js"
let initialState={
    number:'',
    ans:''
}

export const CalculatorReducer=(state=initialState,action)=>{
    let{type,payload}=action
    console.log(action.type);
  switch (type) {
     
      case SPIN_BUTTONS:
          console.log("hai")
          return{
            
              ...state,
              ...payload,
              number:state.number.concat(action.payload)
          }
          case SPIN_ANS:
            try{
              return {
               ...state,
               ...payload,
               ans:eval(state.number).toString()
              }

           }catch(err){
               return {
                   ...state,
                   ...payload,
                   ans:'Error'
               }
           }
            case SPIN_CLEAR:
                return{
                    ...state,
                    ...payload,
                    number:'',
                    ans:''
                }
                case SPIN_BACKSPACE:
                return{
                    ...state,
                    ...payload,
                    number:(state.number).slice(0,-1),
                    ans:''
                }
          
          
  
      default:
          return state
  }
}