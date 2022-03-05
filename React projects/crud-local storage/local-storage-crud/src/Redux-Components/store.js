import { combineReducers, createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';


import logger from 'redux-logger'
import cakeReducer from "./Cakes/CakeReducer";
import iceCreamReducer from "./IcreCream/IceCreamsReducers";
import buyPop from "./lollipops/LolliPopReducer";


const store =createStore(cakeReducer)
console.log("store data");
// console.log(store);
export const store1=createStore(iceCreamReducer)
export const popStore=createStore(buyPop)



export  const rootReducer= combineReducers({
    cake:cakeReducer,
    pop:buyPop
})
console.log(rootReducer);

export const rootStore=createStore(rootReducer, composeWithDevTools(
    applyMiddleware(logger)
) )

export default store

