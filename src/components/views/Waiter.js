import React, { useState } from 'react';
import NavWaiter from '../navBar/NavBarWaiter';
import TypeMenu from '../menu/TypeMenu';
import Footer from '../navBar/Footer';
import Data from '../../assets/data/menu.json';

// Components section order
import ClientName from '../order/ClientName';
import OrderResume from '../order/OrderResume.js';
import OrderProduct from '../order/OrderProduct.js';
import OrderTotal from '../order/OrderTotal.js';
import OrderBtn from '../order/OrderBtn.js';

import '../../styles/viewsCss/Waiter.css';
import '../../styles/order/Order.css';

//Cambiar nombre nuevo Pedido
export default function Waiter() {
  const [order, setOrder] = useState([]);
  const [client, setClient]=useState('');
  const [total, setTotal]= useState(0);
  

  let objOrder = {
    name: client,
    uid: 'Waiter',
    products: order,
    totalOrder: total
  } 

  console.log(objOrder)

  return (
    <div className='Waiter'>
      <NavWaiter />

      <div className='Waiter-section'>
        <section className='Menu-section'>
          <TypeMenu
            data={Data.menu }
            order={order}
            setOrder={setOrder} />
        </section>

        <section className='Order-section'>
          <div className='Order'>
            <ClientName  setClient={setClient}/>
            <OrderResume />

          <div className='Order-products-container'>
            {order.map((product, index) => (
              <OrderProduct
                key={index + 'orderProduct'}
                product={product}
                index={index}
                order={order}
                setOrder={setOrder}
              />
            ))}
          </div>


            <div className='Order-bottom'>
              <OrderTotal order ={order} setTotal={setTotal} total={total}/>

              <OrderBtn  objOrder={objOrder}  />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}
