import { configureStore, createSlice } from "@reduxjs/toolkit";




 var cakeSlice= createSlice({

    name:'cakeSlice',

    initialState :{
        cakeCount:10
    },

//createSLice will look at all functions that are defined in redcuers & for every case ite will generate action type &
//action function/creator automatically
    reducers :{
        ADD :(state,action)=>{

            state.cakeCount=state.cakeCount+action.payload
        },

       SUB:(state,action)=>{
            state.cakeCount=state.cakeCount-action.payload
        }
    }
})
  export var {ADD,SUB}=  cakeSlice.actions
// console.log(cakeSlice.actions)
// console.log(cakeSlice.reducer)
 export var toolkitStore= configureStore({
    reducer: cakeSlice.reducer
 })
 
//  toolkitStore.subscribe(()=> console.log(toolkitStore.getState().cakeCount))
//  toolkitStore.dispatch(ADD())
//  toolkitStore.dispatch(ADD())
//  toolkitStore.dispatch(ADD())
//  toolkitStore.dispatch(SUB())


