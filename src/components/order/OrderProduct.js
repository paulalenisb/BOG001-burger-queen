import React from 'react';
import '../../styles/order/OrderProduct.css';

export default function OrderProduct(props) {
  const quantity = 1
  console.log(props.order)

  return (
    <div className="Order-product">
      <p>algo</p>
      <div className="Order-quantity">
        <button className="Btn-product" aria-label="Restar producto"><i className="fas fa-minus" /></button>
        <p className="Order-number">{quantity}</p>
        <button className="Btn-product" aria-label="Sumar producto"><i className="fas fa-plus" /></button>
      </div>
      <div className="Order-price">
        <p className="Order-number">price</p>
        <button className="Btn-product" aria-label="Eliminar producto"><i className="fas fa-trash" /></button>
      </div>
    </div>
  )
}
