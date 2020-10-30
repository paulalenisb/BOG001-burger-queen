import React, { setState } from 'react';
import '../../styles/menu/TypeMenu.css';
import Data from '../../assets/data/menu.json';
import Breakfast from '../menu/Breakfast';
import LunchDinner from '../menu/LunchDinner';
//import { useHistory } from 'react-router-dom';

export default function TypeMenu () {
  //const [foodType, setState] = useState('Desayuno');

  let state = {
    active: true
  };

  const showMenu = () => {
    setState({active: !state.active})
  }

  if (state.active){
    return(
      <div>
        <ul className='Type-menu'>
          <li className='Menu-breakfast' onClick={showMenu}>Desayuno</li>
          <li className='Menu-other'>Almuerzo/Cena</li>
        </ul>
        <Breakfast data = {Data.menu}/>
      </div>
      )
  } else {
    return(
      <div>
      <ul className='Type-menu'>
        <li className='Menu-breakfast' >Desayuno</li>
        <li className='Menu-other'onClick={showMenu}>Almuerzo/Cena</li>
      </ul>
      <LunchDinner/>
    </div>
    )
  }
}
