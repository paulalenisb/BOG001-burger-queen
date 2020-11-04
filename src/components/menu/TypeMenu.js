import React, { useState } from 'react';
import Data from '../../assets/data/menu.json';
import LunchDinner from '../menu/LunchDinner';
import Cards from '../menu/Cards';

import '../../styles/menu/TypeMenu.css';

export default function TypeMenu() {
  let objPrueba = []; 

  const facilonga = (product) => {
    objPrueba.push(product)  
    console.log(objPrueba)
  }

  const [foodType, setFoodType] = useState('Breakfast');

  //const[resumeState, setResumeState] = useState('');
  return (
    <div className='Menu-section-container'>
      {/* <FinalOrder.Provider value ={ objPrueba}/> */}
      <div className='Type-menu'>
        <button className='Menu-breakfast Menu-active' value= 'Breakfast' onClick={ (e) => setFoodType(e.target.value) }>Desayuno </button>
        <button className='Menu-other' value ='Lunch' onClick={ (e) => setFoodType(e.target.value) }>Almuerzo/Cena</button>
        {console.log(foodType)}
      </div>

      {foodType === 'Breakfast' && 
        <div className='Products-container'>
          {Object.keys(Data.menu).filter(lunch => Data.menu[lunch].type.includes(foodType)).map((product, index) => (
            <Cards key={'cards' + index} data={Data.menu} product={product} index={index} gato = {() => facilonga(product)}/>
          ))}
        </div>
      }{foodType !== 'Breakfast' && 
        <LunchDinner data ={Data.menu} gato={facilonga()}/>
      }
    </div>
  )
}
