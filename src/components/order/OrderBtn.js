import React from 'react';
import newOrder from '../../firebaseConfig.js'

import '../../styles/order/OrderBtn.css';

export default function OrderBtn({objOrder, setOrder, setClient}) {

  const closeAll = ()=>{
    setOrder([]);
    setClient('');
  }

  return (
    <div className='Order-btn-container'>
      <button className='Cancel-order-btn'onClick ={()=> closeAll()}>Cancelar</button>
      <button className='Add-order-btn' onClick ={()=> {newOrder(objOrder); closeAll()} }>Ordenar</button>
    </div>
  )
};
