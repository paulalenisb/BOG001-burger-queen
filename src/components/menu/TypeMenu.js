import React, { useState } from 'react';
import Data from '../../assets/data/menu.json';
import Cards from '../menu/Cards';

import '../../styles/menu/TypeMenu.css';

export default function TypeMenu(props) {

  const orderPush = (product) => {
    props.order.push(product)
    console.log(props.order)
  }

  const [foodType, setFoodType] = useState('Breakfast');
 //const [subMenu, setSubMenu] = useState(['Burger', 'Side-order','Drinks'])

  return (
    <div className='Menu-section-container'>
      {/* <FinalOrder.Provider value ={ objPrueba}/> */}
      <div className='Type-menu'>
        <button className='Menu-breakfast Menu-active' value='Breakfast' onClick={(e) => setFoodType(e.target.value)}>Desayuno</button>
        <button className='Menu-other' value='Lunch' onClick={(e) => setFoodType(e.target.value)}>Almuerzo/Cena</button>
        {console.log(foodType)}
      </div>

      <div className='Products-container'>
        {/* Botones lunch */}
        {/* subMenu.map((product, index) => (
          <button key={'button' + index}
            className='Submenu-btn' 
            value={product}
            onClick={(e) => setSubMenu(e.target.value)}
            >{product}</button>
            )) */}
        { 
        Object.keys(Data.menu).filter(lunch => Data.menu[lunch].type.includes(foodType)).map((product, index) => (
            <Cards key={'cards' + index} 
            data={Data.menu} 
            product={product} 
            index={index} 
            orderR={() => orderPush(product)}
            />
          ))}
        </div>
    </div>
  )
}
