import React, { useState } from 'react';
import BurgerModal from '../menu/BurgerModal';

import '../../styles/menu/LunchDinner.css';
import '../../styles/menu/Cards.css';

export default function Cards({ index, setOrder, data, product, subMenu, foodType, setMeat, meatX, order }) {

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {setShowModal(prev => !prev);}

  return (
    <div
      key={index + 'card'}
      className='Product-card'
      >

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

      { subMenu === 'Burgers' && foodType === 'Lunch-Dinner' ? (
        <>
          <button
            className='Product-btn'
            onClick={openModal}>Opciones</button>
          <BurgerModal
            showModal={showModal}
            setShowModal={setShowModal}
            data={data}
            product={product}
            order={order}
            meatX ={meatX}
            setMeat={setMeat}
            setOrder={setOrder} />
        </>
      ): (
        <>
        <button
          className='Product-btn'
          onClick={() => setOrder([...order, { product, quantity : 1 , price: data[product].price, total: data[product].price }])}>
            Agregar
        </button>
        </>
      )}
    </div>
  )
}
