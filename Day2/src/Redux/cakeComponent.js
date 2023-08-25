import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD,SUB } from '../ReduxToolkit/simpletoolkitconfig'

// import { ADD,SUB } from '../ReduxToolkit/icecreamconfig'
export default function CakeComponent() {

   // useState()

   //useSelector: it allows component to extract required data from store which is provided using <Provider>

   //selector will be called whenver state changes & comp gets re-renders


   var cakeCount=     useSelector((state)=>state.cake.cakeCount)

   //useDiaptch returns reference using which we can disptach action to a store

  var dispatch= useDispatch()

  return (
    <div>

        <h1>Cake Count :{cakeCount} </h1>

        {/* <button onClick={()=>dispatch({type:"ADD",data:1})}>Increment</button>

        <button onClick={()=>dispatch({type:"SUB",data:1})}>Decrement</button> */}


<button onClick={()=>dispatch(ADD(3))}>Increment</button>

<button onClick={()=>dispatch(SUB(1))}>Decrement</button>

    </div>
  )
}
