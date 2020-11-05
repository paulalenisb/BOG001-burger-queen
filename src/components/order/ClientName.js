import React from 'react';

import '../../styles/order/ClientName.css'

export default function ClientName() {
  return (
    <div>
      <label className='Client-name'>Cliente:
        <input className='Client-input' type='text' name='nombre' required></input>
      </label>
    </div>
  )
}


