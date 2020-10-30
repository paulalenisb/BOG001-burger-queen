import React from 'react';
import '../../styles/order/ClientName.css'

export default function ClientName () {
  return (
    <div>
      <h3 className='Client-name'>Cliente:<input className='Client-input' type="text" name="nombre" required></input></h3>
    </div>

  )
}


