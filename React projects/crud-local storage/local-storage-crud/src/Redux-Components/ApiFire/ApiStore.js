import {  createStore} from "redux";
import  apiReducer  from "./APIReducer";
console.log("i m store");
console.log(apiReducer);
export const FetchStore=createStore(apiReducer)
console.log("i m store");
// console.log(ApiReducer);
// console.log(FetchStore);