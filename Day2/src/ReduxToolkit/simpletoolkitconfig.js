import { configureStore, createSlice } from "@reduxjs/toolkit";

import { icecreamSlice } from "./icecreamconfig";


 var cakeSlice= createSlice({

    name:'cakeSlice',

    initialState :{
        cakeCount:10
    },

//createSLice will look at all functions that are defined in redcuers & for every case ite will generate action type &
//action function/creator automatically
    reducers :{
        ADD :(state,action)=>{
            console.log("Add of cake reducer is called")

            state.cakeCount=state.cakeCount+action.payload
        },

       SUB:(state,action)=>{
            state.cakeCount=state.cakeCount-action.payload
        }
    }
})





  export var {ADD,SUB}=  cakeSlice.actions

  //export var {ADD,SUB}=  icecreamSlice.actions

// console.log(cakeSlice.actions)
// console.log(cakeSlice.reducer)
//  export var toolkitStore= configureStore({
//     reducer: {cake:cakeSlice.reducer,ice:icecreamSlice.reducer}
//  })


export var toolkitStore =configureStore({
    reducer: cakeSlice.reducer
})

 //configuring multiple reducers
 export var toolkitStore1= configureStore({
    reducer: {cake:cakeSlice.reducer}
 })
 
 
//  toolkitStore.subscribe(()=> console.log(toolkitStore.getState().cakeCount))
//  toolkitStore.dispatch(ADD())
//  toolkitStore.dispatch(ADD())
//  toolkitStore.dispatch(ADD())
//  toolkitStore.dispatch(SUB())


