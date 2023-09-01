import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADDToCart } from '../../reducer/productsReducer'
export default function ProductCard() {

  var product = useSelector(state=>state.selectedProduct)

  var dispatch = useDispatch()



  if(product!==null)
  return (
    <div className='bg-light list-group-item border m-2 p-2'>
      <h3>{product.name}</h3>
      <p>{product.Description}</p>
      <p>Size: {product.Size}</p>
      <p>Price: Rs.{product.Price}</p>
      <div><button className='btn btn-success' onClick={()=>{dispatch(ADDToCart(product.id))}}>Add To Cart</button></div>
    </div>
  )
  else
  return(
    <div className='bg-light border m-2 p-2'>
      <span>Please select any product</span>
    </div>
  )
}
