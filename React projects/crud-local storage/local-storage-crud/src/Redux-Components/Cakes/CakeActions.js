import { BUY_CAKE,RETURN_CAKE } from "./CakeType"
export default  function  buyCake(number=1){
    return{
        type:BUY_CAKE,
        payload:number
    }
}
export  function  returnCake(){
    return{
        type:RETURN_CAKE
    }
}