import React from 'react';
import Logo from '../../assets/images/Logo-BQ2.png';

// Styles
import '../../styles/viewsCss/Home.css';

export default function Home({ history })  {
  return (
    <div className='Home Center-column'>
      <img src={Logo} className='Home-logo' alt='Burguer Queen Logo'/>
      <div className='Home-btn-container'>
        <button className='Home-btn' onClick= {() => { history.push('/waiter') }}>Mesero</button>
        <button className='Home-btn' onClick= {() => { history.push('/kitchen') }}>Jefe de cocina</button>
      </div>
    </div>
  )
}
