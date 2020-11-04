import React, { useState } from 'react';
import '../../styles/menu/Cards.css';
import '../../styles/menu/LunchDinner.css';
import Cards from '../menu/Cards';

export default function LunchDinner(props) {
  const [subMenuType, setSubMenu] = useState('Hamburgers'); 

  return (
    <div className='Lunch-container'>
      <div className='Lunch-submenu'>
        <button className='Submenu-btn' value='Hamburgers' onClick={ (e) => setSubMenu(e.target.value)}>Hamburguesas</button>
        <button className='Submenu-btn' value='Acompañamientos' onClick={ (e) => setSubMenu(e.target.value)}>Acompañamientos</button>
        <button className='Submenu-btn' value='Drinks' onClick={ (e) => setSubMenu(e.target.value)}>Bebidas</button>
      </div>
      <div className='Products-container'>
        {
          Object.keys(props.data).filter(lunch => props.data[lunch].submenu.includes(subMenuType)).map((product, index)=>(
            <Cards key={'cards' + index} data={props.data} product={product} index={index} gato={props.gato}/>
          ))
        }
      </div>
    </div>
  )
}
