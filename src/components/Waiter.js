import React from 'react';
import '../styles/Home.css';
import NavWaiter from './navBar/NavBarWaiter';

export default function Mesero()  {

  return(
    <div className='Home'>
        <NavWaiter />
        <h1>Aquí es lo del mesero</h1>
    </div>
  )
}
