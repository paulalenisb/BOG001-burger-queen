import React, { useState } from 'react';
import Cards from '../menu/Cards';

import '../../styles/menu/Cards.css';
import '../../styles/menu/LunchDinner.css';

export default function LunchDinner(props) {
  const [subMenuType, setSubMenu] = useState('Burgers');

  return (
    <div className='Lunch-container'>
      <div className='Lunch-submenu'>
        <button className='Submenu-btn' value='Burgers' onClick={(e) => setSubMenu(e.target.value)}>Hamburguesas</button>
        <button className='Submenu-btn' value='Side-Orders' onClick={(e) => setSubMenu(e.target.value)}>Acompañamientos</button>
        <button className='Submenu-btn' value='Drinks' onClick={(e) => setSubMenu(e.target.value)}>Bebidas</button>
      </div>
      <div className='Products-container'>
        {
          Object.keys(props.data).filter(lunch => props.data[lunch].submenu.includes(subMenuType)).map((product, index) => (
            <Cards key={'cards' + index} data={props.data} product={product} index={index} gato={props.gato}/>
          ))
        }
      </div>
    </div>
  )
}
