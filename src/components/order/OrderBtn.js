import React from 'react';
import newOrder from '../../firebaseConfig.js'

// Styles
import '../../styles/order/OrderBtn.css';

export default function OrderBtn({objOrder, setOrder, setClient}) {

  const cleanAll = ()=>{
    setOrder([]);
    setClient('');
  }

  return (
    <div className='Order-btn-container'>
      <button className='Cancel-order-btn'onClick ={()=> cleanAll()}>Cancelar</button>
      <button className='Add-order-btn' onClick ={()=> {newOrder(objOrder); cleanAll()} }>Ordenar</button>
    </div>
  )
};
