import React from 'react';

import '../../styles/cardState/CookingCard.css'

export default function CookingCard() {

  return(
    <div className='Cooking-card'>
        <div className='Info-name-clock'>
          <div className='Name-client'>
            <h3>Cliente:</h3>
            <p>María</p>
          </div>
          <div className='Cooking-time'>
            <i className="far fa-clock"></i>
            <p>Aquí el tiempo</p>
          </div>
        </div>
        
      <div className='Order-products'>
        <ul className='Cooking-card-quantity'>
          Cantidad
          <li>1</li>
        </ul>
        <ul className='Cooking-card-products'>
          Producto
          <li>Café Américano</li>
        </ul>
      </div>
      
      <button className= 'ready-btn'>¡Listo!</button>
    </div>
  )
}