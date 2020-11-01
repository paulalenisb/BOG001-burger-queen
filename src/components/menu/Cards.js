import React from 'react';

export default function cards (props){
    return(
        <div key = {props.index +"card"} className='Product-card'>
            <h3 key={props.index +"price"} className="Product-price">${props.data[props.product].price}</h3>
            <img src={props.data[props.product].image} key ={props.index +"image"} alt={props.product} className="Product-image"/>
            <h2 key={props.index +"product"} className="Product-title">{props.product}</h2>
        </div>
    )
}