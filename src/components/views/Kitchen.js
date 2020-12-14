import React, { useEffect, useState } from 'react';
import { snapshotGettingData } from '../../firebaseFunc';
import CookingCard from '../cardState/CookingCard'
import NavBar from '../navBar/NavBar';
import Footer from '../navBar/Footer';

// Styles
import '../../styles/viewsCss/Kitchen.css';

  export default function Kitchen() {

    const [orderMaked, setOrderMaked]= useState([]);

    const navKitchen = [
      {route: '/Kitchen', name:'Pedidos'},
      {route: '/HistoryOrder', name:'Historial de Pedidos'}
    ]

    //Todo useEffect sucede despues del return
    useEffect(()=>{
      const arrayData = [];
      snapshotGettingData('order', arrayData, setOrderMaked);
    /*  gettingData('order').then((doc) => {
        const orders = doc.docs.map( doc => {
          return { id: doc.id, ...doc.data() }});
        setOrderMaked(orders)
      }); */
    }, []) //aqui van las que cosas que detenienen el useEffect, (aquí podría estar el error)
    return (
      <div className="Kitchen-section">
        <NavBar nav={navKitchen}/>

        <div className='Kitchen'>
          {orderMaked.filter((products) => products.ready === false).map((order, index)=> (
            <CookingCard order={order} index={index} key={index + 'cookingCard'} setOrderMaked={setOrderMaked} />
          ))}
        </div>
        <Footer />
      </div>
    )
  }
