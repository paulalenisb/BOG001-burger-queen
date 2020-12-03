import React, { useState, useEffect } from 'react';
import { updateData } from '../../firebaseFunc';


// Styles
import '../../styles/cardState/CookingCard.css'

export default function CookingCard({ order, index }) {
  const [time, setTime] = useState(0);
  //update
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((time % (1000 * 60)) / 1000);
  console.log(hours, minutes, seconds, Date.now().toString(), order.date.nanoseconds/1000000000)

console.log(order)
  useEffect(()=>{
    const x = setInterval(() => {
      setTime(() => Date.now() - (order.date.seconds + order.date.nanoseconds/100000) );
    }, 1000);
    return () => clearInterval(x);
  }, [order.date])

  const handleStop = () => {
    const time = `${hours}h ${minutes}m ${seconds}s`
    updateData('order', order.id, time, {
      ready: true,
      time: time,
    })
  }
  
  return(
    <div className='Cooking-card'key={index +'orderMaked'}>
        <div className='Info-name-clock'>
          <div className='Name-client'>
            <h3>Cliente:</h3>
            <p>{order.name}</p>
          </div>
          <div className='Cooking-time'>
            <i className="far fa-clock"></i>
            
            <p>{ `${hours}h:${minutes}m: ${seconds}s` }</p>
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
      
      <button className= 'ready-btn'onClick={()=>handleStop }>¡Listo!</button>
    </div>
  )
}