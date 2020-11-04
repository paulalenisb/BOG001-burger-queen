import React from 'react';
import ClientName from '../order/ClientName';
import OrderResume from '../order/OrderResume.js';
import OrderProduct from '../order/OrderProduct.js';
import OrderTotal from '../order/OrderTotal.js';
import OrderBtn from '../order/OrderBtn.js';

import '../../styles/order/Order.css';

export default function Order () {
  return (
    <div className='Order'>
      <ClientName />
      <OrderResume />
      <OrderProduct />
      <div className='Order-bottom'>
      <OrderTotal />
      <OrderBtn />
      </div>
    </div>
  )
}
