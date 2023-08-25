import { createSlice,configureStore } from "@reduxjs/toolkit";


import { Data } from "../Data/Characters";

var charaSlice= createSlice({

    name:'slice1',

    initialState:Data,  // state.charadata,state,herosdata

    reducers:{

        ADDCharacter : (state,action)=>{

            //when + is clicked on CharacterCOm
            //we will remove that character from state.charadata & add it in state,herosdata

            //we will filter out charter with id which will come in payload from charctercomponent
            state.charadata = state.charadata.filter(chara=>chara.id != action.payload)

            //here we will add new charcter in existing herosData array
            //Here we are getting charcter with matching id from Data which is there in js file
            state.herosdata =[...state.herosdata, Data.charadata.find(p=>p.id == action.payload)]
        },


        RemoveCharacter:(state,action)=>{
            state.herosdata = state.herosdata.filter(chara=>chara.id != action.payload)

            state.charadata =[...state.charadata, Data.charadata.find(p=>p.id == action.payload)]
        }

    }
})


export var {ADDCharacter,RemoveCharacter} = charaSlice.actions

export var charaStore= configureStore({
    reducer:charaSlice.reducer
})





