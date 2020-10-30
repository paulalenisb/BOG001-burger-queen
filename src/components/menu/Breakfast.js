import React from 'react';
//import Data from '../../assets/data/menu.json';
import '../../styles/menu/Breakfast.css';
/* import product from '../../assets/images/products/breakfast-jugo-frutas.png'; */

export default function Breakfast (props) {
  return(
    <div className= 'Product-container'>
      {
        //{names.filter(name => name.includes('J'))
        Object.keys(props.data).filter(Bfast => props.data[Bfast].type.includes('Breakfast')).map((product, index)=>(
          <div key = {index +"card"} className='Product-card'>
            <h3 key={index +"price"} className="Product-price">${props.data[product].price}</h3>
            <img src={props.data[product].image} key ={index +"image"} alt={product} className="Product-image"/>
            <h2 key={index +"product"} className="Product-title">{product}</h2>
          </div>
        ))
      }

    {/* <img src={product} className='Home-logo' alt='Burguer Queeen Logo'/> */}
    </div>
  )
}

