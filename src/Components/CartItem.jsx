import React from 'react'
import { purchasedProduct } from '../pages/ProductPage'

export default function CartItem(props) {
  return (
    <div className="products">
      <div className="product">
                <div>
                <span>{props.title}</span>
                <p>Product Price: {props.price}$</p>
                <p>Quantity: {props.quantity}</p>
                </div>
                <label className="price small">
                <p>Total Price</p>
                <div>
                    {props.total}$
                </div>
                </label>
        </div>
    </div>
  )
}
