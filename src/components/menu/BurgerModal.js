import React from 'react';
import ReactDom from 'react-dom';
import '../../styles/menu/BurgerModal.css';

export default function BurgerModal({ data, showModal, setShowModal }) {
  // const [meat, setMeat] = useState('');
  // const [toppings, setToppings] = useState([]);

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

  return ReactDom.createPortal (
    <>
      {showModal ? (
          <div className='Overlay'>
            <div className='Modal'>
              <div className='Modal-btn-close'>
                <p className='Modal-title'>Hamburguesa Sencilla</p>
                <button
                  className='Btn-cancel'
                  onClick={() => setShowModal(prev => !prev)}>
                    <i className="fas fa-times"></i>
                </button>
              </div>

              <img alt='burger'/>
              <div className='option-meat'>
                <input
                  type='radio'
                  name='meat' />
              </div>
              <div className='option-toppings'>
              <input
                  type='checkbox'
                  name='toppings' />
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
