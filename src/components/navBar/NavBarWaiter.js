import React from 'react';
import logo from '../../assets/Logo-BQ.png';
//import { Link } from 'react-router-dom';

export default function NavBarWaiter () {
return (
    <ul className='Nav-Waiter'>
        <li className= 'Nav-waiter-item'>Home</li>
        <li className= 'Nav-waiter-item'>Nuevo Pedido</li>
        <li className = 'Nav-waiter-item'>Estado de pedido</li>
        <img src={logo} className='Nav-logo' alt='Burguer Queeen Logo'/>
    </ul>
    )
}
