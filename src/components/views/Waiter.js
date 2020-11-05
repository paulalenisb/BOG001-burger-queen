import React from 'react';
import NavWaiter from '../navBar/NavBarWaiter';
import TypeMenu from '../menu/TypeMenu';
import Footer from '../navBar/Footer';

// Components section order
import ClientName from '../order/ClientName';
import OrderResume from '../order/OrderResume.js';
import OrderProduct from '../order/OrderProduct.js';
import OrderTotal from '../order/OrderTotal.js';
import OrderBtn from '../order/OrderBtn.js';

import '../../styles/viewsCss/Waiter.css';
import '../../styles/order/Order.css';

/* const FinalOrder = React.createContext({
  cliente : '',
  product: []
}); */

export default function Waiter() {
  //let objPrueba = [];

  /* const facilonga = (product)=>{
    objPrueba.push(product)
    console.log(objPrueba)
  } */
  //const [resumeOrder, setResumeOrder] = useContext(finalOrder)

  return (
    <div className='Waiter'>
      <NavWaiter />
      <div className='Waiter-section'>
        <section className='Menu-section'>
          <TypeMenu /* provider = cards */ />
        </section>
        <section className='Order-section'>
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
        </section>
      </div>
      <Footer />
    </div>
  )
}

/* export default {
  Waiter,
  FinalOrder
} */
