const redux =require('redux')
const reduxLogger=require('redux-logger')




const createStore=redux.createStore
const combineReducers=redux.combineReducers
const applyMiddleware=redux.applyMiddleware
const logger=reduxLogger.createLogger()

const BUY_CAKE='BUY_CAKE'

const BUY_ICECREAM='BUY_ICECREAM'


function buyCake(){
    return{
        type:BUY_CAKE,
        info:"first redux action"
    }
}
function buyIce(){
    return{
        type:BUY_ICECREAM,
       
    }
}

//(previousState,action)=> newState

// const initialState={
//     numofCakes:10,
//     numofIceCreams:20
// }
const CakeInitialState={
    numofCakes:10,

}
const IceInitialState={
    numofIceCreams:10,

}

// const reducer=(state=initialState,action)=>{
//    switch(action.type){
//        case BUY_CAKE: return{
//            ...state,
//            numofCakes:state.numofCakes-1
//        }
//        case BUY_ICECREAM: return{
//         ...state,
//         numofIceCreams:state.numofIceCreams-1
//     }
//        default: return state

//    }
// }

const CakeReducer=(state=CakeInitialState,action)=>{
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numofCakes:state.numofCakes-1
        }
        default: return state
 
    }
 }
 const IceReducer=(state=IceInitialState,action)=>{
    switch(action.type){
        case BUY_ICECREAM: return{
            ...state,
            numofIceCreams:state.numofIceCreams-1
        }
        default: return state
 
    }
 }
 const rootReducer=combineReducers({
     cake:CakeReducer,
     iceCream:IceReducer
 })
const store=createStore(rootReducer,applyMiddleware(logger))
console.log('Initial state',store.getState())
const unsubscibe=store.subscribe(()=>{})

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIce())
store.dispatch(buyIce())
store.dispatch(buyIce())
unsubscibe();