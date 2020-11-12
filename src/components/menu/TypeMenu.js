import React, { useState } from 'react';
import Cards from '../menu/Cards';

import '../../styles/menu/TypeMenu.css';

export default function TypeMenu(props) {

  const orderPush = (product) => {
    props.handleOrder([...props.order, product])
  }

  const subMenuLunch = ['Burgers', 'Side-Orders','Drinks']

  const [foodType, setFoodType] = useState('Breakfast');
  const [subMenu, setSubMenu] = useState('')

  const changeMenu = (e) => {
    setFoodType(e.target.value)
    setSubMenu('')
  }

  const menu = Object.keys(props.data).filter((type => {
    if (props.data[type].type.includes(foodType)){
      if (subMenu !== ''){
        return props.data[type].submenu.includes(subMenu) // Arr Lunch
      }
      return true // Arr Breakfast
    }
    return false // W/out type & submenu
  }))

  return (
    <div className='Menu-section-container'>

      <div className='Type-menu'>
        <button className='Menu-breakfast Menu-active'
        value='Breakfast'
        onClick={(e) => changeMenu(e)}
        >Desayuno</button>

        <button
        className='Menu-other'
        value='Lunch'
        onClick={(e) => setFoodType(e.target.value)}
        >Almuerzo/Cena</button>
      </div>

      <div className='Products-container'>
        {
        foodType === 'Lunch' ?
        subMenuLunch.map((product, index) => (
          <button key={'button' + index}
            className='Submenu-btn'
            value={product}
            onClick={(e) => setSubMenu(e.target.value)}
          >{product}</button>
          ))
        : null
        }

        {
        menu.map((product, index) => (
          <Cards key={'cards' + index}
            data={props.data}
            product={product}
            index={index}
            order ={() => orderPush(product)}
          />
          ))
        }
      </div>
    </div>
  )
}
