import React, {useState} from 'react';
import ReactDom from 'react-dom';

// Styles
import '../../styles/menu/BurgerModal.css';

export default function BurgerModal({ data, showModal, setShowModal, product, setOrder, setMeatOptn, meatOptn, order }) {

  const meatOptions = data[product].meat;
  const toppingsOptions = Object.keys(data[product].toppings);
  const priceToppings = Object.values(data[product].toppings);
  const [priceExtra, setPriceExtra] = useState([]);
  const [extra, setExtra] = useState([]);
  let copyPrice = priceExtra
  

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
                  <label key={`${index}meatOptions`}>
                    <input
                      type='radio'
                      name={meat}
                      id={meat}
                      value={meat}
                      onChange={(e)=>setMeatOptn(e.currentTarget.value)} />
                      {meat}
                  </label>
                ))}
              </div>

              <p className='Modal-toppings-title'>Adicionales</p>

              <div className='option-toppings'>

                {toppingsOptions.map((toppings, index) => (
                  <label key={`${index}toppingsOptions`}>
                    <input
                      type='checkbox'
                      name={toppings}
                      id={toppings}
                      value= {1}
                      onChange={(e) => {setExtra([...extra,e.currentTarget.name]); setPriceExtra( [ ...priceExtra, parseInt(e.currentTarget.value)]) }}/>
                      { toppings + '   $' + priceToppings[0] }
                  </label>
                ))}
                
              </div>
              
              <button
                className='Modal-add-btn'
                onClick={() => {setOrder([...order, { product:`${product} ${meatOptn} ${extra}`, quantity: 1, price: data[product].price,   total: data[product].price + copyPrice.reduce((finalTotal,currentValue) => finalTotal + currentValue,0) }])
                  setShowModal(prev => !prev)}
                  }>
                  Agregar</button>
            </div>
          </div>
        )
      : null}
    </>,
    document.getElementById('portal')
  )
};
