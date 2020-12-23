import React, { useState } from 'react';
import Cards from '../menu/Cards';

// Styles
import '../../styles/menu/TypeMenu.css';

export default function TypeMenu({ data, order, setOrder }) {

  const subMenuLunch = ['Burgers','Side-Orders','Drinks']

  const [foodType, setFoodType] = useState('Breakfast');
  const [subMenu, setSubMenu] = useState('Burgers');

  const menuFilter = Object.keys(data).filter((productKey => {
    if (foodType !== data[productKey].type){
      return false // W/out type & submenu
    }
    if (foodType === 'Breakfast'){
      return true // Arr Breakfast
    }
    return data[productKey].submenu === subMenu // Arr Lunch
  }))

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
        subMenuLunch.map((category, index) => (
          <button
            key={`${index}button`}
            className='Submenu-btn'
            value={category}
            onClick={(e) => setSubMenu(e.target.value)}
          >{category}</button>
          ))
        : null
        }

        {
        menuFilter.map((product, index) => (
          <Cards
            key={`${index}cards`}
            data={data}
            product={product}
            index={index}
            subMenu={subMenu}
            foodType={foodType}
            order={order}
            setOrder={setOrder}
          />
          ))
        }
      </div>
    </div>
  )
};
