import React from 'react';

import '../../styles/order/OrderTotal.css';

export default function OrderTotal({ totalPrice }) {
  return (
    <div className='Order-total'>
      <h1 className='Order-total-title'>Total</h1>
  <h1 className='Order-total-number'>{'$ ' + totalPrice}</h1>
    </div>
  )
}
