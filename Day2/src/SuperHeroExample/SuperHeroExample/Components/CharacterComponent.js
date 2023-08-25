import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADDCharacter } from '../Reducer/characterReducer'
export default function CharacterComponent() {


  var charcters=    useSelector(state=>state.charadata)

    var dispatch= useDispatch()
  return (
    <div>

        <h4>Characters</h4>

        {

            charcters.map(character=>{

                return(

                    <li className="list-group-item" key={character.id}>
                    <div className='list-item'>
                        {character.name}
                    </div>

                    <div className='list-item right-button'  onClick={()=>dispatch(ADDCharacter(character.id))}>
                        +
                    </div>
            </li>
                )
            })
        }
    </div>
  )
}
