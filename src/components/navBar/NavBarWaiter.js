import React from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '../../assets/images/Logo-BQ.png';
import Home from '../../assets/svg/Home.svg';

import '../../styles/navBar/NavBarWaiter.css';

export default function NavBarWaiter() {
  let history = useHistory();

  return (
    <header className='Header-nav-waiter'>
        <div className="Nav-container-left">
          <ul className='Nav-waiter'>
            <li className='Nav-waiter-item'onClick={() => { history.push("/"); }}>
              <img src={Home} className='Nav-home-icon' alt='Icon Home'/>
            </li>
            <li className='Nav-waiter-item'onClick={() => { history.push("/waiter"); }}>Nuevo Pedido</li>
            <li className='Nav-waiter-item'>Estado de pedido</li>
          </ul>
        </div>
        <div className="Nav-container-right">
          <img src={Logo} className='Nav-waiter-logo' alt='Burguer Queeen Logo'/>
        </div>
    </header>
  )
}
