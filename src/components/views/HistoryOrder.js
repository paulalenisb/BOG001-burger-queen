import React,{ useEffect, useState} from 'react';
import { snapshotGettingData } from '../../firebaseFunc';
import HistoryCard from '../cardState/historyCard';
import NavBar from '../navBar/NavBar';
import Footer from '../navBar/Footer';

// Styles
import '../../styles/viewsCss/Kitchen.css';

  export default function HistoryOrder() {

    const [orderMaked, setOrderMaked]= useState([]);

    const navKitchen = [
      {route: '/Kitchen', name:'Pedidos'},
      {route: '/HistoryOrder', name:'Historial de Pedidos'}
    ]
    
    //Todo useEffect sucede despues del return 
    useEffect(()=>{
      const arrayData = [];
      snapshotGettingData('order', arrayData, setOrderMaked);
      /* gettingData('order').then((doc) => {
        const orders = doc.docs.map(doc=>{ return { id: doc.id, ...doc.data()}});
        setOrderMaked(orders)
      });  */
    }, []) 
    
    return (
      <div className="Kitchen-section">
        <NavBar nav={navKitchen}/>

        <div className='Kitchen'>
          {orderMaked.filter((algo) =>  algo.delivery === true && algo.ready === true).map((order, index)=>(
            <HistoryCard order={order} index={index} key={index+'readyToDelivery'}/>
          ))} 
        </div>

        <Footer />
      </div>
    )
  }