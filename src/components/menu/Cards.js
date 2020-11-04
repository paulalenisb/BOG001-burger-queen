import React from 'react';
import '../../styles/menu/LunchDinner.css';
import '../../styles/menu/Cards.css';

export default function Cards (props){
    return(
        <div key = {props.index +"card"} className='Product-card' onClick= {props.gato} >
            <h3 className="Product-price">${props.data[props.product].price}</h3>
            <img src={props.data[props.product].image} key ={props.index +"image"} alt={props.product} className="Product-image"/>
            <h2 className="Product-title">{props.product}</h2>
        </div>
    )
    
}

