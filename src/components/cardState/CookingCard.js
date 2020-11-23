import React from 'react';

import '../../styles/cardState/CookingCard.css'

export default function CookingCard({order, index}) {


  return(
    <div className='Cooking-card'key={index +'orderMaked'}>
        <div className='Info-name-clock'>
          <div className='Name-client'>
            <h3>Cliente:</h3>
            <p>{order.name}</p>
          </div>
          <div className='Cooking-time'>
            <i className="far fa-clock"></i>
            
            <p>{order.date.seconds}</p>
          </div>
        </div>
        
      <div className='Order-products'>
        <ul className='Cooking-card-quantity'>
          Cantidad
          {order.products.map((product,index)=>(
            <li key={index +"quantity"}>{product.quantity}</li>
          ))}
          
        </ul>
        <ul className='Cooking-card-products'>
          Producto
          {order.products.map((product,index)=>(
            <li key={index +"product"}>{product.product}</li>
          ))}
        </ul>
      </div>
      
      <button className= 'ready-btn'onClick={()=>order.ready = true}>¡Listo!</button>
    </div>
  )
}