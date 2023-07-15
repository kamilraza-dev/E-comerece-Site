import React from 'react'

export default function AddToCart() {
  return (
    Swal.fire({
        title: 'Item Added to Cart',
        text: 'Thanks for Shopping',
        icon: 'success',
        confirmButtonText: 'Continue Shopping'
      })
  )
}
