import React from 'react';
import NavWaiter from '../navBar/NavBarWaiter';
import TypeMenu from '../menu/TypeMenu';
import Order from '../order/Order';
import Footer from '../navBar/Footer';
import '../../styles/viewsCss/Waiter.css';
// import OrderProduct from '../order/OrderProduct';

/* const FinalOrder = React.createContext({
  cliente : "",
  product: []
}); */

export default function Waiter() {
  const objPrueba = [];

  const facilonga = (product) => {
    objPrueba.push(product)
    console.log(objPrueba)
  }
  // const [resumeOrder, setResumeOrder] = useContext(finalOrder)

  return (
    <div className="Waiter">
      <NavWaiter />
      <div className="Waiter-section">
        <section className="Menu-section">
          <TypeMenu perro={facilonga()}/* provider = cards */ />
        </section>
        <section className="Order-section">
          <Order /* consumer = provider */ />
        </section>
      </div>
      <Footer />
    </div>
  )
}

/* export default {
  Waiter,
  FinalOrder
} */
