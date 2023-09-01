import React from 'react'
import{useDispatch, useSelector} from 'react-redux'
import { SELECTProduct } from '../../reducer/productsReducer'
export default function Products() {

    var products = useSelector(state=>state.productdata)
    var dispatch = useDispatch()

    return(
        <div className='m-2'>
            
            {
                products.map(product=>{
                    return(
                        <li className='list-group-item bg-light border' key = {product.id} onClick={()=>dispatch(SELECTProduct(product.id))}>
                            <div className='list-item'>
                                <h5>{product.name}</h5>
                                <span>Rs.{product.Price}</span>
                            </div>
                        </li>
                    )
                })
            }
        </div>
    )

  return (
    <div>Products</div>
  )
}
