import React from 'react';
import Logo from '../../assets/images/Logo-BQ2.png';
import '../../styles/viewsCss/NotFound.css'
export default function NotFound() {
  return (
    <div className='NotFound'>
      <img src={Logo} className='Home-logo' alt='Burguer Queen Logo'/>
      <h1>Contenido no encontrado</h1>
    </div>
  )
}
