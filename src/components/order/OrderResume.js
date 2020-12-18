import React from 'react';

// Styles
import '../../styles/order/OrderResume.css';

export default function OrderResume() {
  return (
    <div className='Order-titles Center-column'>
      <h2 className='Order-resume'>Resumen del pedido</h2>
      <ul className='Order-categories'>
        <li className='Product-resume'>Producto</li>
        <li className='Quantity-resume'>Cantidad</li>
        <li className='Price-resume'>Precio</li>
      </ul>
    </div>
  )
}
