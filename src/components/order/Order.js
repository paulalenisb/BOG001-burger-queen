import React from 'react';
import ClientName from './ClientName';
import OrderResume from './OrderResume.js';
import OrderProduct from './OrderProduct.js';
import OrderTotal from './OrderTotal.js';
import OrderBtn from './OrderBtn.js';
// import FinalOrder from '../views/Waiter';
import '../../styles/order/Order.css';

export default function Order() {
  // const resumeOrder = React.useContext(FinalOrder)

  return (
    <div className="Order">
      {/* <FinalOrder.Consumer> */}
      <ClientName />
      <OrderResume />
      <OrderProduct /* order = {{resumeOrder}} *//>
      <div className="Order-bottom">
        <OrderTotal />
        <OrderBtn />
      </div>
    </div>
  )
}
