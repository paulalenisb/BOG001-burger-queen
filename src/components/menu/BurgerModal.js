import React from 'react';

export default function BurgerModal({ data, showModal, setShowModal }) {
  return (
    <>
      {showModal ? (
        <div>
          <p>Hamburgeusa Sencilla</p>
          <img alt='Hamburguesa Sencilla'/>
          <input
            type='checkbox'
            name='meat'/>
          <button onClick={() => setShowModal(prev => !prev)}>
            <i className="fas fa-times-circle"></i>
          </button>
          <button>Agregar</button>
        </div>
      )
      : null}
    </>
  )
}
