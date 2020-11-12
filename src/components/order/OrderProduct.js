import React, { useState } from 'react';
import '../../styles/order/OrderProduct.css';


export default function OrderProduct({ order, setOrder }) {

  const [quantity, setQuantity] = useState(1);

  return (
    order.map((product, index)=>(
      <div className='Order-product' key={index}>
        <p>{product}</p>
        <div className='Order-quantity'>
          <button className='Btn-product'
          aria-label='Restar producto'
          onClick={()=>{ quantity - 1 === 0 ? setOrder(order.filter((_,idx) => idx !== index )): setQuantity(quantity-1)}}>
            <i className='fas fa-minus'></i>
          </button>
          <p className='Order-number'>{quantity}</p>
          <button className='Btn-product'
          aria-label='Sumar producto'
          onClick={()=>{setQuantity(quantity+1)}}>
            <i className='fas fa-plus'></i>
          </button>
        </div>
        <div className='Order-price'>

          <p className='Order-number'>{'price'}</p>

          <button className='Btn-product'
          aria-label='Eliminar producto'
          onClick ={ () => setOrder(order.filter((_,idx) => idx !== index ))} >
            <i className='fas fa-trash'></i>
          </button>
        </div>
      </div>
      ))

  )
};
