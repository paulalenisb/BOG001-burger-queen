import React, { useState } from 'react';

import '../../styles/order/OrderProduct.css';

export default function OrderProduct(props) {

  const [quantity, setQuantity] = useState('1');

  return (
    <div className='Order-product' id= {props.name}>
      <p>{props.name}</p>
      <div className='Order-quantity'>
        <button className='Btn-product' aria-label='Restar producto'onClick={()=>{setQuantity(quantity-1)}}>
          <i className='fas fa-minus'></i>
        </button>
        <p className='Order-number'>{quantity}</p>
        <button className='Btn-product' aria-label='Sumar producto'onClick={()=>{setQuantity(quantity+1)}}>
          <i className='fas fa-plus'></i>
        </button>
      </div>
      <div className='Order-price'>
        <p className='Order-number'>{'price'}</p>
        <button className='Btn-product' aria-label='Eliminar producto' onClick={props.handleClick}>
          <i className='fas fa-trash'></i>
        </button>
      </div>
    </div>
  )
}

/* handleClick: function(){
  React.unmountComponentAtNode(document.getElementById('kitten'));   
} */