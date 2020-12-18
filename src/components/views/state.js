/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import NavBar from '../navBar/NavBar';
import Footer from '../navBar/Footer';
import { snapshotGettingData } from '../../firebaseFunc';
import ReadyToDelivery from '../cardState/readyToDelivery'


export default function  orderState() {
    
    const [delivery, setDelivery]= useState([])
    const [handin, setHandin] = useState (false)
    const navWaiter = [
      {route: '/waiter', name:'Nuevo Pedido'},
      {route: '/orderState', name:'Pedidos Listos'}
    ]

    useEffect(()=>{
      setHandin(false)
      const arrayData =[];
      snapshotGettingData('order', arrayData, setDelivery);
    }, [handin, setHandin])
    return (
      <div className="Kitchen-section">
        <NavBar nav={navWaiter} />

        <div className='Kitchen'>
          {delivery.filter((algo) =>  algo.ready === true && algo.delivery===false).map((deliveryOrder, index)=>(
            <ReadyToDelivery order={deliveryOrder} index={index} key={index + 'readyToDelivery'} setHandin={setHandin}/>
          ))}
        </div>
        <Footer />
      </div>
    )
  };
