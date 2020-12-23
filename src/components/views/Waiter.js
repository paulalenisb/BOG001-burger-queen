import React, { useState, useEffect } from 'react';
import Data from '../../assets/data/menu.json';
import NavBar from '../navBar/NavBar';
import TypeMenu from '../menu/TypeMenu';
import Footer from '../navBar/Footer';

// Components section order
import ClientName from '../order/ClientName';
import OrderResume from '../order/OrderResume.js';
import OrderProduct from '../order/OrderProduct.js';
import OrderTotal from '../order/OrderTotal.js';
import OrderBtn from '../order/OrderBtn.js';

// Styles
import '../../styles/viewsCss/Waiter.css';
import '../../styles/order/Order.css';

export default function Waiter() {

  const [order, setOrder] = useState([]);
  const [client, setClient]=useState('');
  const [total, setTotal]= useState(0);

  let objOrder = {
    name: client,
    uid: 'Waiter',
    products: order,
    totalOrder: total,
    time: 0,
    sending: true,
    ready: false,
    delivery: false
  } 

  const navWaiter = [
    {route: '/waiter', name:'Nuevo Pedido'}, 
    {route: '/orderState', name:'Pedidos Listos'}
  ]

  useEffect(() => {
    setTotal(order.reduce((finalTotal, { total }) => finalTotal + total, 0))
  }, [order, setOrder])

  return (
    <div className='Waiter'>
      <NavBar nav={navWaiter} />

      <div className='Waiter-section'>
        <section className='Menu-section'>
          <TypeMenu
            data={Data.menu}
            order={order}
            setOrder={setOrder} 
          />
        </section>

        <section className='Order-section'>
          <div className='Order'>
            <ClientName setClient={setClient} />
            <OrderResume />

          <div className='Order-products-container'>
            {order.map((product, index) => (
              <OrderProduct
                key={`${index}orderProduct`}
                product={product}
                index={index}
                order={order}
                setOrder={setOrder}
                setTotal ={setTotal}
              />
            ))}
          </div>

            <div className='Order-bottom'>
              <OrderTotal total={total} />

              <OrderBtn  
                objOrder={objOrder} 
                setOrder={setOrder} 
                setClient={setClient} 
              />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
};
