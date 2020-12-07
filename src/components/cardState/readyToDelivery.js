import React from 'react';
import { updateDelivery } from '../../firebaseFunc';

// Styles
import '../../styles/cardState/CookingCard.css'

export default function ReadyToDelivery({ order, index }) {

  const handleStop = () => {
    const readyTo = true
    updateDelivery('order', order.id, readyTo);
  }

  return(
    <div className='Cooking-card' key={index+'readyToDelivery'}>
        <div className='Info-name-clock'>
          <div className='Name-client'>
            <h3>Cliente:</h3>
            <p>{order.name}</p>
          </div>
          <div className='Cooking-time'>
            <h3>Total: </h3>
            <p>{` $${order.totalOrder}`}</p>
          </div>
        </div>

      <div className='Order-products'>
        <ul className='Cooking-card-quantity'>
          Cantidad
          {order.products.map((product,index)=>(
            <li key={index+"quantity"}>{product.quantity}</li>
          ))}
        </ul>

        <ul className='Cooking-card-products'>
          Producto
          {order.products.map((product,index)=>(
            <li key={index +"product"}>{product.product}</li>
          ))}
        </ul>

        <ul className='Cooking-card-price'>
          Precio
          {order.products.map((product,index)=>(
            <li key={index+"price"}>{'$ '+ product.price}</li>
          ))}
        </ul>
      </div>

      <button className= 'ready-btn'onClick={()=>handleStop() }>Entregar</button>
    </div>
  )
}
