import React from 'react';


export default function OrderProduct () {
  return (
    <div className='Order-product'>
      <p>Café americano</p>
      <div className='Order-quantity'>
        <button className='Btn-quantity'><i class="fas fa-minus"></i></button>
        <p className='Order-number'>1</p>
        <button className='Btn-quantity'><i class="fas fa-plus"></i></button>
      </div>
      <p className='Order-price'>$5</p>
      <button className='Btn-erase'><i class="fas fa-trash"></i></button>
    </div>

  )
}
