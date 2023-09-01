import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../CartItem/CartItem'

export default function Cart() {

  var cartItems = useSelector(state=>state.cartItems)
  var totalCartValue = 0;
  cartItems.forEach(product =>{
    totalCartValue+=product.Price;
  }
  )
  return (
    <div className='bg-light list-group-item m-2 p-1 border'>
      <h4>Cart</h4>
      {
        cartItems.map(product => {
          return(
            <CartItem product={product}></CartItem>
          )
        })
      }
      <button className='btn btn-primary'>Total : {totalCartValue}</button>
    </div>
  )
}
