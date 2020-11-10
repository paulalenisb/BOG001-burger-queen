import React, { useState } from 'react';
import Data from '../../assets/data/menu.json';
import Cards from '../menu/Cards';
//import LunchDinner from '../menu/LunchDinner';

import '../../styles/menu/TypeMenu.css';
//import OrderResume from '../order/OrderResume';

export default function TypeMenu(props) {

    const facilonga = (product) => {
    props.order.push(product)
    console.log(props.order)
  }

  const [foodType, setFoodType] = useState('Breakfast');
  const [submenu, setSubmenu] = useState('None')

  //const[resumeState, setResumeState] = useState('');
  return (
    <div className='Menu-section-container'>
      {/* <FinalOrder.Provider value ={ objPrueba}/> */}
      <div className='Type-menu'>
        <button className='Menu-breakfast Menu-active' value='Breakfast' onClick={(e) => setFoodType(e.target.value)}>Desayuno</button>
        <button className='Menu-other' value='Lunch' onClick={(e) => setFoodType(e.target.value)}>Almuerzo/Cena</button>
        {console.log(foodType)}
      </div>

      {submenu === 'None' &&
        <div className='Products-container'>
          {Object.keys(Data.menu).filter(lunch => Data.menu[lunch].type.includes(foodType)).map((product, index) => (
            <Cards key={'cards' + index} data={Data.menu} product={product} index={index} gato = {() => facilonga(product)}/>
          ))}
        </div>

        //refactorizar lunch <cards></cards>
      }{submenu !== 'None' &&
      <div>
        <button className='Submenu-btn' value='Burgers' onClick={(e) => setSubmenu(e.target.value)}>Hamburguesas</button>
        {/* <LunchDinner data ={Data.menu} gato={facilonga()}/> */}
      </div>
      
      }
    </div>
  )
}
