import React from 'react';
import ClientName from '../order/ClientName';
import OrderResume from '../order/OrderTotal.js';
import OrderProduct from '../order/OrderProduct.js';
import OrderTotal from '../order/OrderTotal.js';


export default function Order () {
  return (
    <div>
      <ClientName />
      <OrderResume />
      <OrderProduct />
      <OrderTotal />
    </div>
  )
}
