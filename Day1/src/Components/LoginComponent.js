import React, { useContext, useRef, useState } from 'react'
import { loginContext } from '../App'

export default function LoginComponent() {



    var {userName,setUserName}  =    useContext(loginContext)

   var userNameRef=  useRef()

   var passwordRef=  useRef()


  return (
    <div>

UserName : <input type="text" ref={userNameRef} /> <br/>

Password : <input type="text" ref={passwordRef}/> <br/>

<button onClick={()=>{

     var userName= userNameRef.current.value

      setUserName(userName)

}}>Login </button>


    </div>
  )
}
