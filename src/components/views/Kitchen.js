import React, { useEffect, useState } from 'react';
import { snapshotGettingData } from '../../firebaseFunc';
import CookingCard from '../cardState/CookingCard'
import NavBar from '../navBar/NavBar';
import Footer from '../navBar/Footer';

// Styles
import '../../styles/viewsCss/Kitchen.css';

  export default function Kitchen() {

    const [orderMaked, setOrderMaked]= useState([]);
    const [ready, setReady] = useState(false);

    const navKitchen = [
      {route: '/Kitchen', name:'Pedidos'},
      {route: '/HistoryOrder', name:'Historial de Pedidos'}
    ]

    //Todo useEffect sucede despues del return
    useEffect(()=>{
      setReady(false)
      const arrayData = [];
      snapshotGettingData('order', arrayData, setOrderMaked);
    }, [ready, setReady]) //aqui van las que cosas que hacen iterar el useEffect
    
    return (
      <div className="Kitchen-section">
        <NavBar nav={navKitchen}/>

        <div className='Kitchen'>
          {orderMaked.filter((products) => products.ready === false).map((order, index)=> (
            <CookingCard order={order} index={index} key={`${index}cookingCard`} setReady={setReady} />
          ))}
        </div>
        <Footer />
      </div>
    )
  }
