import React from 'react';
import Data from '../../assets/data/menu.json';
import '../../styles/Breakfast.css';

export default function LunchDinner () {
  return(

    <div className= 'Product-container'>
      {
        //{names.filter(name => name.includes('J'))
        Object.keys(Data.menu).filter(lunch => Data.menu[lunch].type.includes('Lunch-Dinner')).map((product, index)=>(
          <div key = {index} className='Product-card'>
            <h3 key={index} className="Product-price">$ {Data.menu[product].price}</h3>
            <img src={Data.menu[product].image} key ={index} alt={product} className="Product-image"/>
            <h2 key={index} className="Product-title">{product}</h2>
          </div>
        ))
      }
    </div>
  )
}
