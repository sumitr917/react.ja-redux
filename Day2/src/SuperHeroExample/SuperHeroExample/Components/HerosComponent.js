import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RemoveCharacter } from '../Reducer/characterReducer'
export default function HerosComponent() {


  var charcters=    useSelector(state=>state.herosdata)

    var dispatch= useDispatch()
  return (
    <div>

        <h4>Heros Characters</h4>

        {

            charcters.map(character=>{

                return(

                    <li className="list-group-item" key={character.id}>
                    <div className='list-item'>
                        {character.name}
                    </div>

                    <div className='list-item right-button'  onClick={()=>dispatch(RemoveCharacter(character.id)) }>
                       -
                    </div>
            </li>
                )
            })
        }
    </div>
  )
}
