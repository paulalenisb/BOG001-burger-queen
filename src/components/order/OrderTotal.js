import React from 'react';

import '../../styles/order/OrderTotal.css';

export default function OrderTotal({ order, setTotal, total}) {

  setTotal(order.reduce((finalTotal, { total }) => finalTotal + total, 0));

  return (
    <div className='Order-total'>
      <h1 className='Order-total-title'>Total</h1>
      <h1 className='Order-total-number'>{'$ '+ total }</h1>
    </div>
  )
}
