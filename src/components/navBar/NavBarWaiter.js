import React from 'react';
import logo from '../../assets/images/Logo-BQ.png';
import home from '../../assets/svg/Home.svg';
import '../../styles/NavBarWaiter.css';
//import { Link } from 'react-router-dom';

export default function NavBarWaiter() {
  return (
    <header className='Header-nav-waiter'>
        <ul className='Nav-waiter'>
          <li className='Nav-waiter-item'><img src={home} className='Nav-home-icon' alt='Icon Home'/></li>
          <li className='Nav-waiter-item'>Nuevo Pedido</li>
          <li className='Nav-waiter-item'>Estado de pedido</li>
        </ul>
        <img src={logo} className='Nav-waiter-logo' alt='Burguer Queeen Logo'/>
    </header>
  )
}
