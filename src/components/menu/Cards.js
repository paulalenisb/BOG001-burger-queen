import React from 'react';
import '../../styles/menu/LunchDinner.css';
import '../../styles/menu/Cards.css';

export default function Cards({ index, product, data, gato }) {
  return (
    <div key={`${index}card`} className="Product-card" onClick={gato}>
      <h3 className="Product-price">
        $
        {data[product].price}
      </h3>
      <img src={data[product].image} key={`${index}image`} alt={product} className="Product-image" />
      <h2 className="Product-title">{product}</h2>
    </div>
  )
}
