import React, { useState } from 'react';
import BurgerModal from '../menu/BurgerModal';

import '../../styles/menu/LunchDinner.css';
import '../../styles/menu/Cards.css';

export default function Cards({index, order, data, product}) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {setShowModal(prev => !prev);}

  return (
    <div
      key={index + 'card'}
      className='Product-card'
      onClick={order}>

      <h3 className='Product-price'>
        ${data[product].price}
      </h3>
      <img
        src={data[product].image}
        alt={product}
        className='Product-image'/>

      <h2 className='Product-title'>
        {product}
      </h2>
      <button onClick={openModal}>Opciones</button>
        <BurgerModal
          showModal={showModal}
          setShowModal={setShowModal}
          data={data}
          product={product}/>
    </div>
  )
}
