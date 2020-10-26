import React from 'react';
import Data from '../../assets/data/menu.json';
import '../../styles/Breakfast.css';
/* import product from '../../assets/images/products/breakfast-jugo-frutas.png'; */

export default function Breakfast () {
  return(
    <div className= 'Product-container'>
      {
        //{names.filter(name => name.includes('J'))
        Object.keys(Data.menu).filter(Bfast => Data.menu[Bfast].type.includes('Breakfast')).map((product, index)=>(
          <div key = {index +"card"} className='Product-card'>
            <h3 key={index +"price"} className="Product-price">${Data.menu[product].price}</h3>
            <img src={Data.menu[product].image} key ={index +"image"} alt={product} className="Product-image"/>
            <h2 key={index +"product"} className="Product-title">{product}</h2>
          </div>
        ))
      }

    {/* <img src={product} className='Home-logo' alt='Burguer Queeen Logo'/> */}
    </div>
  )
}

