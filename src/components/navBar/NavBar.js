import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../../assets/images/Logo-BQ.png';
import Home from '../../assets/svg/Home.svg';
import '../../styles/navBar/NavBar.css';

export default function NavBar({ nav }) {

  return (
    <header className='Header-nav-waiter'>
      <div className='Nav-container-left'>
        <div className="Nav-waiter">
        <NavLink
            className='Nav-waiter-item'
            to= "/">
              <img src={Home} className='Nav-home-icon' alt='Icon Home'/>
          </NavLink>

          { 
            nav.map((view, idx) => 
              <NavLink 
                key ={`${idx} menu`}
                className='Nav-waiter-item'
                activeClassName='Nav-waiter__item--active'
                to= {view.route}>
                  {view.name}
              </NavLink>
          )}
        </div>
          
      </div>

      <div className='Nav-container-right' >
        <img src={Logo} className='Nav-waiter-logo' alt='Burguer Queeen Logo'/>
      </div>
    </header>
  )
}
