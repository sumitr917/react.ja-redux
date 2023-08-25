

import { createSlice,configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";




let initialState ={

    albums :[],
    isLoading:false,
    error:null

}

//first parameter of createAsyncthunk is: type
//2nd parameter is callback function where we will call actual api & it will return promise & its data
//it will generate below action types
//get/photos/pending
//get/photos/fulfilled
//get/photos/rejected


  export var fetchContent= createAsyncThunk('get/photos', async()=>{

        var response=  await axios.get("https://jsonplaceholder.typicode.com/albums")
        console.log(response.data)

       return  response.data

  })

    var slice= createSlice({
    name:'photoSlice',
    initialState,

    extraReducers:(builder)=>{
           
        builder.addCase(fetchContent.pending,(state,action)=>{
               state.isLoading =true
        })

        builder.addCase(fetchContent.fulfilled,(state,action)=>{

            state.isLoading =false
            state.albums =action.payload
        })

        builder.addCase(fetchContent.rejected,(state,action)=>{

            state.isLoading =false
            state.error = action.error.message
        })
    }


    //we will use extraReducers as our actions are generated using createAsyncThunk outside createSlice
    // extraReducers:(builder)=>{
        
    //     builder.addCase(fetchContent.pending, (state,action)=>{
    //                 state.isLoading =true
    //     }),
    //     builder.addCase(fetchContent.fulfilled, (state,action)=>{
    //         state.isLoading =false
    //             state.albums = action.payload
    //     }),
    //     builder.addCase(fetchContent.rejected, (state,action)=>{
    //          state.isLoading =false
    //          state.error= action.error.message

    //     })
    // }
    
   })


   export var photoStore= configureStore({
            reducer:slice.reducer
   })