import React from 'react';
import Data from '../../assets/data/menu.json';
import '../../styles/Breakfast.css';

export default function Breakfast () {
  const ProductsNames = Object.keys(Data.menu.Desayuno.Producto);
  const ProductProperties = Object.values(Data.menu.Desayuno.Producto);
  console.log(ProductProperties)

  return(
    <div className= 'Product-container'>
      {ProductsNames.map((product, index)=>(
        <div className='Product-card'>
          <h2 key={index}>{product}</h2>
          {/* <h3 key = {index}>{product.Precio}</h3> */}
        </div>
      ))}
    </div>
  )
}

/* {Dishes.map((dish, index) => (
  <li key={index}>{dish}</li>
))}
 */
