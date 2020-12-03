import React, {  useState, useEffect } from 'react';
import NavBar from '../navBar/NavBar';
import Footer from '../navBar/Footer';
import { gettingData } from '../../firebaseFunc';


export default function  orderState() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [delivery, setDelivery]= useState([])
    const navWaiter = [
      {route: '/waiter', name:'Nuevo Pedido'}, 
      {route: '/orderState', name:'Pedidos Listos'}
    ]
      
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{
      gettingData('order').then((doc) => {
        const orders = doc.docs.map(doc=>{ return { id: doc.id, ...doc.data()}});
        setDelivery(orders)
      }); 
    }, [])
    console.log(delivery)
    return (
      <div>
        <NavBar nav={navWaiter} />
        {delivery.filter((algo) =>  algo.delivery === false).map((deliveryOrder)=>(
          <p>{deliveryOrder.id}</p>
        ))}
        <Footer />
      </div>
    )
  };
  