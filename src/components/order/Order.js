import React from 'react';
import ClientName from '../order/ClientName';
import OrderResume from '../order/OrderResume.js';
import OrderProduct from '../order/OrderProduct.js';
import OrderTotal from '../order/OrderTotal.js';
import OrderBtn from '../order/OrderBtn.js';
//import FinalOrder from '../views/Waiter';
import '../../styles/order/Order.css';

export default function Order () {

  //const resumeOrder = React.useContext(FinalOrder)

  return (
    <div className='Order'>
      {/* <FinalOrder.Consumer> */}
      <ClientName />
      <OrderResume />
      <OrderProduct  /* order = {{resumeOrder}} *//>
      <div className='Order-bottom'>
      <OrderTotal />
      <OrderBtn />
      </div>
    </div>
  )
}
