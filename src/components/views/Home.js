import React from 'react';

import Logo from '../../assets/images/Logo-BQ2.png';
import '../../styles/viewsCss/Home.css';

export default function Home({ history })  {
  return (
    <div className='Home'>
      <img src={Logo} className='Home-logo' alt='Burguer Queeen Logo'/>
      <div className='Home-btn-container'>
        <button className='Home-btn' onClick= {() => { history.push('/waiter') }}>Mesero</button>
        <button className='Home-btn'>Jefe de cocina</button>
      </div>
    </div>
  )
}
