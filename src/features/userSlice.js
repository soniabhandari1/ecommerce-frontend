import{createSlice} from '@reduxjs/toolkit'

//appApi for redux and backend

import appApi from '../services/appApi'
const initialState=null;

export const userSlice=createSlice({
    name:'products',
    initialState,
    reducers:{
        logout:()=>initialState
    },
    extraReducers:(builder)=>{
        builder.addMatcher(appApi.endpoints.signup.matchFulfilled,(_,{payload})=>payload) //_ is state and payload is from action
        builder.addMatcher(appApi.endpoints.login.matchFulfilled,(_,{payload})=>payload)
    }
});

export const {logout}=userSlice.actions
export default userSlice.reducer;