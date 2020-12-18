import React from 'react';
import LogoPwa from '../../assets/images/Logo-pwa-bq.png';

// Styles
import '../../styles/viewsCss/NotFound.css'

export default function NotFound() {
  return (
    <div className='NotFound'>
      <img src={LogoPwa} className='Home-logo' alt='Burguer Queen Logo'/>
      <h1>Contenido no encontrado</h1>
    </div>
  )
}
