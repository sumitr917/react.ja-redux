import { configureStore, createSlice } from "@reduxjs/toolkit";


export var icecreamSlice= createSlice({

    name:'icecreamSlice',

    initialState :{
        icecreamCOut:10
    },

//createSLice will look at all functions that are defined in redcuers & for every case ite will generate action type &
//action function/creator automatically
    reducers :{
        ADD :(state,action)=>{

            console.log("Add of icecream reducer is called")
            state.icecreamCOut=state.icecreamCOut+action.payload
        },

       SUB:(state,action)=>{
            state.icecreamCOut=state.icecreamCOut-action.payload
        }
    }
})


export var {ADD,SUB} = icecreamSlice.actions
