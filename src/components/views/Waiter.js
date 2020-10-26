import React from 'react';
import NavWaiter from '../navBar/NavBarWaiter';
import TypeMenu from '../menu/TypeMenu';
import Breakfast from '../menu/Breakfast';
import Footer from '../navBar/Footer';

import '../../styles/Waiter.css'


export default function Waiter () {
  return(
    <div className='Waiter'>
      <NavWaiter />
      <section className='Menu-section'>
        <TypeMenu />
        <Breakfast />
      </section>
      <Footer  />
    </div>
  )
}
