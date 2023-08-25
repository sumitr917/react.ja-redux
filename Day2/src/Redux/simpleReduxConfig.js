
//define initial state

import { combineReducers, createStore } from "redux"


var initialState={

    cakeCount:10
}


var initialState1={

    icecreamCount:10
}



//Reducer function




var cakeReducer= function(state=initialState,action){

                //reducer should check action type & then return a new state
                switch (action.type){

                    case "ADD":
                            return{
                                
                                cakeCount:state.cakeCount+action.data
                            }
                    case "SUB":
                        
                            return{

                                cakeCount:state.cakeCount-action.data
                            }    

                     default:
                        
                     return state
                }

}


var icecreamReducer= function(state=initialState1,action){

    //reducer should check action type & then return a new state
    switch (action.type){

        case "ADD":
                return{
                    icecreamCount:state.icecreamCount+action.data
                }
        case "SUB":
            
                return{

                    icecreamCount:state.icecreamCount-action.data
                }    

         default:
            
         return state
    }

}



//Create store


// var rootReducer= combineReducers({

//     cake:cakeReducer,
//     ice:icecreamReducer
// })
 export  var cakeStore=  createStore(cakeReducer)


 // we can subscribe to store 
//so whenever store changes we will be notified
//  cakeStore.subscribe(()=> console.log( "CakeCOunt----", cakeStore.getState().cake.cakeCount))
//  cakeStore.subscribe(()=> console.log( "icecreamcount---", cakeStore.getState().ice.icecreamCount))

//  //to store we will disptach action

//  cakeStore.dispatch({type:"ADD",data:1})
//  cakeStore.dispatch({type:"ADD",data:5})
//  cakeStore.dispatch({type:"ADD",data:3})
//  cakeStore.dispatch({type:"SUB",data:1})
//  cakeStore.dispatch({type:"ADD",data:1})
//  cakeStore.dispatch({type:"SUB",data:2})