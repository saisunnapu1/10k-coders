import React, { useContext, useState } from 'react'
 const initialState={
    services:[{name:"mern",duration:"2.9 months"}],//initial state//empty array
    //to push the data to empty we need to know the concept of reducer
};
 const actions={//object
  //action:add service
    ADD_SERVICE:"ADD_SERVICE",//to manipulate data we need actions
};
//CREATING A REDUCER//reducer are heart of heart of the state management
//**Reducers are pure functions**/
 const reducer=(state=initialState,actions)=>{
//collects the state and updates the state and returs the state
//wherever the reducer(called by actions) called
switch(actions.type){
   case actions.ADD_SERVICE:
       return {
           services:[...state.services,{name:"web-dev",Duration:"3 months"}]//spread operator 
           //which collects the previous state
       };
       default:
           return state;
}
};
//creating a context
 export const serviceListContext= React.createContext();
//provider is the one which dispatches the action

//creating a provider
 export const Provider=({children})=>{
const[state,dispatch]=React.useReducer(reducer,initialState)
const value={
    services:state.services,
    addService:(serviceLabel)=>{
        dispatch({type:actions.ADD_SERVICE,serviceLabel});
    },
};
return(
<serviceListContext.Provider value={value}>
    {children}
</serviceListContext.Provider>
)

};

