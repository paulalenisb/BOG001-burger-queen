import React from 'react';
import logo from '../assets/Logo-BQ2.png';
import '../styles/Start.css';

export default function Start()  {
  return(
    <div className="Start">
        <img src={logo} className="Start-logo" alt="Burguer Queeen Logo"/>
        <div className="Start-btn-container">
          <button className="Start-btn">Mesero</button>
          <button className="Start-btn">Jefe de cocina</button>
        </div>
    </div>
  )
}
