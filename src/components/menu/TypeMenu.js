import React, { useState } from 'react';
import '../../styles/menu/TypeMenu.css';
import Data from '../../assets/data/menu.json';
import Breakfast from '../menu/Breakfast';
import LunchDinner from '../menu/LunchDinner';

export default function TypeMenu () {
  const [foodType, setFoodType] = useState('Breakfast');

  if (foodType ==='Breakfast'){
      return(
        <div>
          <div className='Type-menu'>
            <button className='Menu-breakfast' value = {foodType} onClick={ (e) => setFoodType(e.target.value) }> Desayuno </button>
            <button className='Menu-other' value ='Lunch'  onClick={ (e) => setFoodType(e.target.value) }> Almuerzo/Cena </button>
            {console.log(foodType)}
          </div>
          <Breakfast data = {Data.menu}/>
        </div>
      )
  }
    return(
    <div>
      <div className='Type-menu'>
        <button className='Menu-breakfast' value ='Breakfast' onClick={ (e) => setFoodType(e.target.value) }>Breakfast</button>
        <button className='Menu-other' value = {foodType}  onClick={ (e) => setFoodType(e.target.value) }> Almuerzo/Cena </button>
        {console.log(foodType)}
      </div>
      <LunchDinner data = {Data.menu}/>
    </div>
  )
}
