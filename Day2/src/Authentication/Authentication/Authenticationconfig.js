import { createSlice,configureStore } from "@reduxjs/toolkit";







var AuthSLice= createSlice({

    name:'Slice1',

    initialState :{

        isUserAuthenticated:false
    },


    reducers :{

        login :(state,action)=>{
            state.isUserAuthenticated = true
        },


        logout :(state,action)=>{
            state.isUserAuthenticated = false
        }
    }


})


export var {login,logout} = AuthSLice.actions


export var authStore= configureStore({

    reducer:AuthSLice.reducer
})