import React, {useState} from 'react';
import ReactDom from 'react-dom';
import '../../styles/menu/BurgerModal.css';

export default function BurgerModal({ data, showModal, setShowModal, product, setOrder, setMeat, meatX, order }) {

/*   const [toppings, setToppings] = useState([]); */
  const meatOptions = data[product].meat;

  const toppingsOptions = Object.keys(data[product].toppings);
  const priceToppings = Object.values(data[product].toppings);
  const [priceExtra, setPriceExtra] = useState(0);
  const [extra, setExtra] = useState('');

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
                      value={1}
                      onChange={(e) => {setExtra(e.currentTarget.name);setPriceExtra(e.currentTarget.value)}}/>
                      { toppings + '   $' + priceToppings[0] }
                  </label>

                ))}
              </div>
              {console.log(typeof(priceExtra))}
              <button
                className='Modal-add-btn'
                onClick={() =>
                  setOrder([...order, { product: product + meatX + extra, quantity: 1, price: data[product].price, total: data[product].price + priceExtra }])
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
