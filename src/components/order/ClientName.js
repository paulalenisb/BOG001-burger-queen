import React from 'react';

import '../../styles/order/ClientName.css'

export default function ClientName({setClient}) {

  return (
    <div>
      <label className='Client-name'>Cliente:
  <input className='Client-input' type='text' name='nombre' onBlur={(e)=>setClient(e.target.value)} required></input>
      </label>
    </div>
  )
};


