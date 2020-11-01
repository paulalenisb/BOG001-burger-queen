import React, { useState } from 'react';
import '../../styles/menu/Breakfast.css';
//import Cards from './Cards.js'

export default function LunchDinner (props) {
  const [subMenuType, setSubMenu] = useState('Hamburgers');

  return(

    <div className= 'Product-container'>
      <div >
        <button value = 'Hamburgers' onClick={ (e) => setSubMenu(e.target.value) }>Hamburguesas</button>
        <button value = 'Acompañamientos' onClick={ (e) => setSubMenu(e.target.value) }>Acompañamientos</button>
        <button value = 'Drinks' onClick={ (e) => setSubMenu(e.target.value) }>Bebidas</button>
        {console.log(subMenuType)}
      </div>
      {
        Object.keys(props.data).filter(lunch => props.data[lunch].submenu.includes(subMenuType)).map((product, index)=>(
          /* <Cards index = {index} data = {props} product= {product} /> */
        <div key = {index +"card"} className='Product-card'>
          <h3 key={index +"price"} className="Product-price">${props.data[product].price}</h3>
          <img src={props.data[product].image} key ={index +"image"} alt={product} className="Product-image"/>
          <h2 key={index +"product"} className="Product-title">{product}</h2>
        </div>
        ))
      }
    </div>
  )
}
