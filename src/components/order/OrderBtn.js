import React from 'react';
import newOrder from '../../firebaseConfig.js'

import '../../styles/order/OrderBtn.css';

export default function OrderBtn({objOrder}) {


  return (
    <div className='Order-btn-container'>
      <button className='Cancel-order-btn'>Cancelar</button>
      <button className='Add-order-btn' onClick ={()=> newOrder(objOrder) }>Ordenar</button>
    </div>
  )
};
