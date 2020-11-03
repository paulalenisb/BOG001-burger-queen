import React, { useState } from 'react';
import Data from '../../assets/data/menu.json';
import LunchDinner from '../menu/LunchDinner';
import Cards from '../menu/Cards';
import '../../styles/menu/TypeMenu.css';


export default function TypeMenu () {
  const [foodType, setFoodType] = useState('Breakfast');
  //const[resumeState, setResumeState] = useState('');

  if (foodType ==='Breakfast'){
    return(
      <div className='Menu-section-container'>
        <div className='Type-menu'>
          <button className='Menu-breakfast Menu-active' value={foodType} onClick={ (e) => setFoodType(e.target.value) }>Desayuno </button>
          <button className='Menu-other' value ='Lunch' onClick={ (e) => setFoodType(e.target.value) }>Almuerzo/Cena</button>
          {console.log(foodType)}
        </div>
        <div className='Products-container'>

          {Object.keys(Data.menu).filter(lunch => Data.menu[lunch].type.includes(foodType)).map((product, index) => (
            <Cards key={'cards' + index} data={Data.menu} product={product} index={index} onClick = { e => console.log(e) } />
          ))}
        </div>
      </div>
    )
}
  return(
    <div className='Menu-section-container'>
      <div className='Type-menu'>
        <button className='Menu-breakfast' value ='Breakfast' onClick={ (e) => setFoodType(e.target.value) }>Desayuno</button>
        <button className='Menu-other Menu-active' value = {foodType}  onClick={ (e) => setFoodType(e.target.value) }> Almuerzo/Cena </button>
        {console.log(foodType)}
    </div>
    {/* {Object.keys(Data.menu).filter(lunch => Data.menu[lunch].type.includes(foodType)).map((product, index) => (
            <Cards key={'cards' + index} data={Data.menu} product={product} index={index}/>

          ))} */}
    <LunchDinner data ={Data.menu}/>
    </div>
  )
}
