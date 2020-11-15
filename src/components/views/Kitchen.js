import React, { useState } from 'react';
import BurgerModal from '../menu/BurgerModal';

  export default function Kitchen() {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {setShowModal(prev => !prev);}

    return (
      <div>
        <button onClick={openModal}>Botón modal</button>
        <BurgerModal
          showModal={showModal}
          setShowModal={setShowModal} />
      </div>
    )
  }

