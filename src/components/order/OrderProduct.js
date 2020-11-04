import React from 'react';
import '../../styles/order/OrderProduct.css';

export default function OrderProduct (props) {
let quantity = 1

  return (
    <div className='Order-product'>
      <p>{props.product}</p>
      <div className='Order-quantity'>
        <button className='Btn-product' aria-label='Restar producto'><i className="fas fa-minus"></i></button>
  <p className='Order-number'>{quantity}</p>
        <button className='Btn-product' aria-label='Sumar producto'><i className="fas fa-plus"></i></button>
      </div>
      <div className='Order-price'>
        <p className='Order-number'>{props.price}</p>
        <button className='Btn-product' aria-label='Eliminar producto'><i className="fas fa-trash"></i></button>
      </div>
    </div>
  )
}
