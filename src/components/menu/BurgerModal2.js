import React, { useState } from 'react';
import ReactDom from 'react-dom';


export default function BurgerModals({ data, showModal, setShowModal }) {
  const [meat, setMeat] = useState('');
  const [toppings, setToppings] = useState([]);

  const hangleChange = (e) => {
    if (e.target.name === 'meat') {
      setMeat(...meat, e.target.id)
    } else {
      setToppings([...toppings, e.target.id])
    }
  }
  const handleClick = () => {
    setMeat('');
    setToppings([])
  }
  const title = data.map((section) => section.id)
  const options = data
    .filter((section) => section.id === title[0])
    .map((section) => section.menu)
    .flat();
  const toppingsModal = data
    .filter((section) => section.id === title[1])
    .map((section) => section.menu)
    .flat();

  return ReactDom.createPortal (
    <>
      {showModal ? (
        <div>
          <p>Hamburgeusa Sencilla</p>
          <img alt='Hamburguesa Sencilla'/>
          <img
          src={data.image}
          alt={data.name}
          className='Product-image'/>
          <div>
            {options.map((item, id) => (
              <label htmlFor={item.name} key={id}>
                <input
                  type='checkbox'
                  name='meat'
                  id={item.name}
                  onChange={(e) => hangleChange(e)} />
              </label>
            ))}
          </div>
            {toppingsModal.map((item, id) => (
                <label htmlFor={item.name} key={id}>
                  <input
                    type='checkbox'
                    name={item.name}
                    value={item.price}
                    id={item.name}
                    onChange={(e) => hangleChange(e)} />
                </label>
              ))}
          <div>

          </div>
          <button onClick={() => setShowModal(prev => !prev)}>
            <i className="fas fa-times-circle"></i>
          </button>
          <button onClick={handleClick}>Agregar</button>
        </div>
      )
      : null}
    </>,
  )
}
