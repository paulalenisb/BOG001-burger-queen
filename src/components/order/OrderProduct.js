import React from 'react';

import '../../styles/order/OrderProduct.css';

export default function OrderProduct({ product, index, order, setOrder }) {

 const changeQuantity = (index, originalOrder, num ) =>{
    const copyOrder = [...originalOrder];
    copyOrder[index].quantity += num;

    if (copyOrder[index].quantity <= 0){
      copyOrder.splice(index, 1);
    }
    product.total = product.price*product.quantity
    return copyOrder
  }


  return (
      <div className='Order-product' key={index}>
        <p>{product.product}</p>

        <div className='Order-quantity'>
          <button
            className='Btn-product'
            aria-label='Restar producto'
            onClick={() => setOrder(changeQuantity(index,order, -1))}>
            <i className='fas fa-minus'></i>
          </button>

          <p className='Order-number'>{product.quantity}</p>

          <button
            className='Btn-product'
            aria-label='Sumar producto'
            onClick={()=> setOrder(changeQuantity(index,order, 1))}>
              <i className='fas fa-plus'></i>
          </button>
        </div>

        <div className='Order-price'>
          <p className='Order-number'>{'$ ' + product.total }</p>
          <button
            className='Btn-product'
            aria-label='Eliminar producto'
            onClick={() => setOrder(order.filter((_,idx) => idx !== index ))}>
              <i className='fas fa-trash'></i>
          </button>
          {console.log(order, product)}
        </div>
      </div>
  )

};
