import React, { useState } from 'react';
import '../../styles/TypeMenu.css';
//import { useHistory } from 'react-router-dom';



export default function TypeMenu () {
    const [foodType, setFoodtype ]= useState('Desayuno');
    return(
        <ul className='Type-menu'>
            <li className='Menu-breakfast' onClick={() => setFoodtype('Desayuno')}>Desayuno</li>

            <li className='Menu-other' onClick={() => setFoodtype('Otro')}>Almuerzo/Cena</li>
            {console.log(foodType)}
        </ul>

        /* {
          if (typeMenu === "Breakfast"){
          <Breakfast />
        } <LunchDinner/>*/
    )
}
