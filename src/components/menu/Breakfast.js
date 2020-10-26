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
          <h2 key={index} className="Product-title">{product}</h2>
        </div>
      ))}
      {/* {ProductProperties.map((p, i) =>(
        <div>
          <img src={p.imagen} key ={i} alt="Product" className="Product-breakfast"/>
          <h3 key={i}>{p.Precio}</h3>
        </div>
      ))} */}
    </div>
  )
}

/* {Dishes.map((dish, index) => (
  <li key={index}>{dish}</li>
))}
 */
