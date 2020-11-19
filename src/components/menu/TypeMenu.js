import React, { useState } from 'react';
import Cards from '../menu/Cards';

import '../../styles/menu/TypeMenu.css';

export default function TypeMenu({ data, order, setOrder}) {

  const subMenuLunch = ['Burgers', 'Side-Orders','Drinks']

  const [foodType, setFoodType] = useState('Breakfast');
  const [subMenu, setSubMenu] = useState('Burgers');
  const [meatX, setMeat] = useState('');

  const menu = Object.keys(data).filter((productKey => {
    if (foodType !== data[productKey].type){
      return false // W/out type & submenu
    }
    if (foodType === 'Breakfast'){
      return true // Arr Breakfast
    }
    return data[productKey].submenu === subMenu // Arr Lunch
  }))

  /* const algunaCosa ()=>{
    order.map(product =>(
      if(product === product[])
    ))
  } */

  return (
    <div className='Menu-section-container'>

      <div className='Type-menu'>
        <button
          className='Menu-breakfast Menu-active'
          value='Breakfast'
          onClick={(e) => setFoodType(e.target.value)}
        >Desayuno</button>

        <button
          className='Menu-other'
          value='Lunch-Dinner'
          onClick={(e) => setFoodType(e.target.value)}
        >Almuerzo/Cena</button>
      </div>

      <div className='Products-container'>
        {
        foodType === 'Lunch-Dinner' ?
        subMenuLunch.map((product, index) => (
          <button
            key={'button' + index}
            className='Submenu-btn'
            value={product}
            onClick={(e) => setSubMenu(e.target.value)}
          >{product}</button>
          ))
        : null
        }

        {
        menu.map((product, index) => (
          <Cards
            key={'cards' + index}
            data={data}
            product={product}
            index={index}
            subMenu= {subMenu}
            foodType={foodType}
            meatX={meatX}
            setMeat={setMeat}
            order={order}
            setOrder={setOrder}
          />
          ))
        }
      </div>
    </div>
  )
}
