import React from 'react'
import {useSelector} from 'react-redux'
export default function NavBar() {

  var cartItems = useSelector(state => state.cartItems)
  return (
    <div>
        <nav className="navbar navbar-light bg-primary">
            <a className="navbar-brand text-light">&nbsp;Shopping Cart</a>
            <span className='text-light'>
             Cart : {cartItems.length} &nbsp;
            </span>
        </nav>
    </div>
  )
}
