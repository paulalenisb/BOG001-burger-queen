import React from 'react';
import NavBar from '../navBar/NavBar';
import Footer from '../navBar/Footer';

//import db from '../../firebaseConfig'
//import  gettingDataOrdered from '../../firebaseFunc';

  export default function orderState() {

    const navWaiter = [
      {route: '/waiter', name:'Nuevo Pedido'}, 
      {route: '/orderState', name:'Pedidos Listos'}
    ]
      
    /*  db.collection('order').onSnapshot(function (doc) {
        console.log(doc)
    gettingDataOrdered('order', 'date', 'desc').then( (doc) => console.log(doc))
    }) */

    return (
      <div>
        <NavBar nav={navWaiter} />
        <p>Holi, Aqui los estados de los pedidos para entregar</p>
        <Footer />
      </div>
    )
  };
  