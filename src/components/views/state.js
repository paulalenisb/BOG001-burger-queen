import React, {  useState, useEffect } from 'react';
import NavBar from '../navBar/NavBar';
import Footer from '../navBar/Footer';
import { snapshotGettingData } from '../../firebaseFunc';
import ReadyToDelivery from '../cardState/readyToDelivery'


export default function  orderState() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [delivery, setDelivery]= useState([])
    const navWaiter = [
      {route: '/waiter', name:'Nuevo Pedido'},
      {route: '/orderState', name:'Pedidos Listos'}
    ]

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{
      const arrayData =[];
      snapshotGettingData('order', arrayData, setDelivery);
     /*  gettingData('order').then((doc) => {
        const orders = doc.docs.map(doc=>{ return { id: doc.id, ...doc.data()}});
        setDelivery(orders)
      }); */
    }, [])
    return (
      <div className="Kitchen-section">
        <NavBar nav={navWaiter} />

        <div className='Kitchen'>
          {delivery.filter((algo) =>  algo.ready === true && algo.delivery===false).map((deliveryOrder, index)=>(
            <ReadyToDelivery order={deliveryOrder} index={index} key={index + 'readyToDelivery'}/>
          ))}
        </div>

        <Footer />
      </div>
    )
  };
