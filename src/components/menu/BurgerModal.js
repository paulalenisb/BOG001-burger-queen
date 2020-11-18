import React from 'react';
import ReactDom from 'react-dom';
import '../../styles/menu/BurgerModal.css';

export default function BurgerModal({ data, showModal, setShowModal, product, setOrder, setMeat  }) {

/*   const [toppings, setToppings] = useState([]); */



  const meatOptions = data[product].meat;

  const toppingsOptions = Object.keys(data[product].toppings);
  const priceToppings = Object.values(data[product].toppings);

  return ReactDom.createPortal (
    <>
      {showModal ? (
          <div className='Overlay'>
            <div className='Modal'>
              <div className='Modal-btn-close'>
                <p className='Modal-title'>{product}</p>
                <button
                  className='Btn-cancel'
                  onClick={() => setShowModal(prev => !prev)}>
                    <i className="fas fa-times"></i>
                </button>
              </div>

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
                      onChange={(e)=>setMeat(e.target.value)} />
                        {meat}
                  </label>
                ))}
              </div>

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
                className='Add-order-btn'
                onClick={setOrder}>
                  Agregar</button>
            </div>
          </div>
        )
      : null}
    </>,
    document.getElementById('portal')
  )

}
