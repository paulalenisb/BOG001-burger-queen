import React from 'react';
import logo from '../../assets/images/Logo-BQ.png';
import home from '../../assets/svg/Home.svg';
import '../../styles/NavBarWaiter.css';
import { useHistory } from 'react-router-dom';

export default function NavBarWaiter() {
  let history = useHistory();

  return (
    <header className='Header-nav-waiter'>
        <div className="Nav-container-left">
          <ul className='Nav-waiter'>

            <li className='Nav-waiter-item'onClick={() => { history.push("/"); }}>
              <img src={home} className='Nav-home-icon' alt='Icon Home'/>
            </li>
            <li className='Nav-waiter-item'>Nuevo Pedido</li>
            <li className='Nav-waiter-item'>Estado de pedido</li>
          </ul>
        </div>
        <div className="Nav-container-right">
          <img src={logo} className='Nav-waiter-logo' alt='Burguer Queeen Logo'/>
        </div>
    </header>
  )
}
