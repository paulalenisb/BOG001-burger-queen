import React, { useState } from 'react';
import NavWaiter from '../navBar/NavBarWaiter';
import TypeMenu from '../menu/TypeMenu';
import Footer from '../navBar/Footer';

// Components section order
import ClientName from '../order/ClientName';
import OrderResume from '../order/OrderResume.js';
import OrderProduct from '../order/OrderProduct.js';
import OrderTotal from '../order/OrderTotal.js';
import OrderBtn from '../order/OrderBtn.js';
import BurgerModal from '../menu/BurgerModal.js';

import '../../styles/viewsCss/Waiter.css';
import '../../styles/order/Order.css';

//Cambiar nombre nuevo Pedido
export default function Waiter() {

  const [orderResume, setOrderResume] = useState([]);
  const [borrar, setDelete]= useState('algo')

  const handleDelete =()=>{
    setDelete('')
    console.log('DebeBorrar')
  }


  return (
    <div className='Waiter'>
      <NavWaiter />
      <div className='Waiter-section'>
        <section className='Menu-section'>
          <TypeMenu order ={orderResume}  handleOrder={setOrderResume}/* provider = objeto cards con el producto */ />
        </section>
        <section className='Order-section'>
          <div className='Order'>
            {/* <FinalOrder.Consumer> */}
            <ClientName />
            <OrderResume />
            <OrderProduct name={borrar} handleClick={handleDelete}/* order = {{resumeOrder}} *//>
            <div className='Order-bottom'>
              <OrderTotal />
              <OrderBtn />
            </div>
          </div>
        </section>
        <section className='Burger-modal'></section>
      </div>
      <Footer />
    </div>
  )
}

/* export default {
  Waiter,
  FinalOrder
} */
