import React from 'react'
import CartItem from '../Components/CartItem';
import { purchasedProduct, cartTotal } from './ProductPage';
import Swal from 'sweetalert2'

export default function Cart() {

  let CartItems = purchasedProduct.map((item, pos)=> {
        return (
          <CartItem key={pos} title={item.productName} price={item.productPrice} quantity={item.productQuantity} total={item.totalPrice}  />
        )
      })

  const checkOut = () => {
    Swal.fire({
      title: 'Checked Out',
      text: 'Thank you for Shopping',
      icon: 'success',
      confirmButtonText: 'Close'
    })
  }

  return (
<div className="master-container">
  <div className="card cart">
    <label className="title">Your cart</label>
    {CartItems}
  </div>
  
  <div className="card checkout">
    <label className="title">Checkout</label>
    <div className="details">
      <span>Your cart subtotal:</span>
      <span>{cartTotal}$</span>
      <span>Shipping fees for each item:</span>
      <span>4.99$</span>
    </div>
    <div className="checkout--footer">
      <label className="price">
        <sup>$</sup>{cartTotal+(purchasedProduct.length*4.99)}
      </label>
      <button className="checkout-btn" onClick={checkOut}>Checkout</button>
    </div>
  </div>
</div>

  )
}
