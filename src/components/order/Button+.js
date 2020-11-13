import React from 'react';
import '../../styles/order/OrderProduct.css';

export default function OrderProduct({ order, setOrder, quantity, setQuantity, index}) {
  return (
    <>
      <button className='Btn-product'
        aria-label='Restar producto'
        key={index}
        onClick={()=>{ quantity - 1 === 0 ? setOrder(order.filter((_,idx) => idx !== index )): setQuantity(quantity-1)}}>
          <i className='fas fa-minus'></i>
      </button>
    </>
  )
}


{/* <Button order={order}
    setOrder={setOrder}
          quantity={quantity}
          setQuantity={setQuantity}
          index={index} />
 */}
