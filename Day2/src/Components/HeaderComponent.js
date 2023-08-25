import React from 'react'
import { loginContext } from '../App'
import { useContext } from 'react'


export default function HeaderComponent(props) {

  var {userName}  =    useContext(loginContext)

  return (
    <div>

      <h1>Welcome {userName}</h1>
    </div>
  )
}
