import React from 'react'

export default function CartItem(props) {
  return (
    <div>
      
      <li className = "list-group-item" key={props.product.id}>
        <h6>{props.product.name}</h6>
        <p>Rs.{props.product.Price}</p>
      </li>
      
      
    </div>
  )
}
