import React from 'react';

import '../../styles/order/OrderProduct.css';

export default function OrderProduct({ product, index, order, setOrder }) {

/*  const changeQuantity = (index, originalOrder, num ) =>{
    const copyOrder = [...originalOrder];
    copyOrder[index].quantity += num;

    if (copyOrder[index].quantity <= 0){
      copyOrder.splice(index, 1);
    }
    //console.log(data.product.price)

    product.price = product.price * product.quantity
    return copyOrder
  } */

//{product, quantity : 1 , price: data[product].price }

  const handleClick = ()=>{
    product.quantity =- 1
  }
console.log(product)

  return (
      <div className='Order-product' key={index}>
        <p>{product.product}</p>

        <div className='Order-quantity'>
          <button
            className='Btn-product'
            aria-label='Restar producto'
            onClick={() => handleClick}>
            <i className='fas fa-minus'></i>
          </button>

          <p className='Order-number'>{product.quantity}</p>

          <button
            className='Btn-product'
            aria-label='Sumar producto'
            onClick={()=>setOrder()}>
              <i className='fas fa-plus'></i>
          </button>
        </div>

        <div className='Order-price'>

          <p className='Order-number'>{'$ ' + product.price  }</p>
          

          <button
            className='Btn-product'
            aria-label='Eliminar producto'
            onClick={() => setOrder(order.filter((idx) => console.log(order[idx]) ))}>
              <i className='fas fa-trash'></i>
          </button>
        </div>
      </div>
  )

};
