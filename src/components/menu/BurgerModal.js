import React from 'react';
import ReactDom from 'react-dom';
import '../../styles/menu/BurgerModal.css';

export default function BurgerModal({ data, showModal, setShowModal, product, setOrder, setMeat, meatX, order }) {

/*   const [toppings, setToppings] = useState([]); */
  const meatOptions = data[product].meat;

  const toppingsOptions = Object.keys(data[product].toppings);
  const priceToppings = Object.values(data[product].toppings);

  return ReactDom.createPortal (
    <>
      {showModal ? (
          <div className='Overlay'>
            <div className='Modal'>
              <button
                className='Btn-cancel'
                onClick={() => setShowModal(prev => !prev)}>
                  <i className="fas fa-times"></i>
              </button>

              <p className='Modal-title'>{product}</p>

              <img
                src={data[product].image}
                alt={product}
                className='Product-image'/>

              <div className='option-meat'>
                {meatOptions.map((meat, index) => (
                  <label key={index + 'meatOptions'}>
                    <input
                      type='radio'
                      name={meat}
                      id={meat}
                      value={meat}
                      onChange={(e)=>setMeat(e.currentTarget.value)} />
                      {meat}
                  </label>
                ))}
              </div>

              <p className='Modal-toppings-title'>Adicionales</p>

              <div className='option-toppings'>

                {toppingsOptions.map((toppings, index) => (
                  <label key={index + 'toppingsOptions'}>
                    <input
                      type='checkbox'
                      name={toppings}
                      id={toppings}
                      value={toppings}/>
                      { toppings + '   $' + priceToppings[0] }
                  </label>
                ))}
              </div>

              <button
                className='Modal-add-btn'
                onClick={() =>
                  setOrder([...order, { product: product + meatX, quantity: 1, price: data[product].price }])
                  }>

                  Agregar</button>
            </div>
          </div>
        )
      : null}
    </>,
    document.getElementById('portal')
  )
}

/// setShowModal(prev => !prev);}>
