import React from 'react';
import ReactDom from 'react-dom';
import '../../styles/menu/BurgerModal.css';

export default function BurgerModal({ data, showModal, setShowModal, product }) { const meatOptions = data[product].meat;
  const toppingsOptions = Object.keys(data[product].toppings);
  console.log(toppingsOptions);


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
                  <label>
                    <input
                      key={index + 'meatOptions'}
                      type='radio'
                      name={meat}
                      id={meat}
                      value='0'/>
                      {meat}
                  </label>
                ))}
              </div>
              <div className='option-toppings'>
                {/* {toppingsOptions.map((toppings, index) => (
                  <label>
                    <input
                      key={index + 'toppingsOptions'}
                      type='checkbox'
                      name={toppings}
                      id={toppings}
                      value={product}/>
                      {product}
                  </label>
                ))} */}
              </div>

              <button className='Add-order-btn'>Agregar</button>
            </div>
          </div>
        )
      : null}
    </>,
    document.getElementById('portal')
  )

}
 // const [meat, setMeat] = useState('');
  // const [toppings, setToppings] = useState([]);

  // const BurgerMenu = Object.keys(data).filter((productKey => {
  //   if (foodType !== data[productKey].type){
  //     return false // W/out type & submenu
  //   }
  //   if (foodType === 'Breakfast'){
  //     return true // Arr Breakfast
  //   }
  //   return data[productKey].submenu === subMenu // Arr Lunch
  // }))

  // const hangleChange = (e) => {
  //   if (e.target.name === 'meat') {
  //     setMeat(...meat, e.target.id)
  //   } else {
  //     setToppings([...toppings, e.target.id])
  //   }
  // }
  // const handleClick = () => {
  //   setMeat('');
  //   setToppings([])
  // }
  // const title = data.map((section) => section.id)
  // const options = data
  //   .filter((section) => section.id === title[0])
  //   .map((section) => section.menu)
  //   .flat();
  // const toppingsModal = data
  //   .filter((section) => section.id === title[1])
  //   .map((section) => section.menu)
  //   .flat();
