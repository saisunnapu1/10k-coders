const redux=require('redux')
const createStore=redux.createStore
const applyMiddleware=redux.applyMiddleware
const thunkMiddleware=require('redux-thunk').default
const axios=require('axios')
const initialState={
    loading:false,
    users:[],
    error:''
}
const FETCH_USERS_REQUEST ="const FETCH_USERS_REQUEST"
const FETCH_USERS_SUCESS ='const FETCH_USERS_SUCESS'
const FETCH_USERS_FAILURE  =" FETCH_USERS_FAILURE"

const fetchUsersRequest=()=>{
    return{
        type:FETCH_USERS_REQUEST
    }
}
const fetchUsersSucess=()=>{
    return{
        type:FETCH_USERS_SUCESS,
        payload:users
    }
}
const fetchUsersFailure=()=>{
    return{
        type:FETCH_USERS_FAILURE,
        payload:error
    }
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return{
                ...state,
                loading:true
            }
        case FETCH_USERS_SUCESS:
            return{
              loading:false,
              users:action.payload,
              error:""
            }
        case FETCH_USERS_FAILURE:
            return{
                loading:false,
                error:action.payload,
                users:[]
            }
    }
}
const fetchUsers=()=>{
    return function(dispatch){
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            const users=res.data.map(user=> user.id)
    dispatch(fetchUsersSucess(users))
        })
        .catch(error=>{
    dispatch(fetchUsersFailure(error))
        })

    }
}
const store=createStore(reducer,applyMiddleware(thunkMiddleware))
store.subscribe(()=>{console.log(store.getState())})
store.dispatch(fetchUsers)
