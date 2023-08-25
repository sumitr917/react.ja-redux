import React from 'react'
import { useSelector } from 'react-redux'

export default function MegaStorecomponent() {


    var cakeCount=     useSelector((state)=>state.cakeCount)

  return (
    <div>


        <h1>Cake Count from MegaStore  {cakeCount}</h1>

        
    </div>
  )
}
