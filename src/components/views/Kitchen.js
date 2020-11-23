import React,{ useEffect, useState} from 'react';
import CookingCard from '../cardState/CookingCard'
import  gettingData from '../../firebaseFunc';


import '../../styles/viewsCss/Kitchen.css';

  export default function Kitchen() {

    const [orderMaked, setOrderMaked]= useState([])
    useEffect(()=>{
      gettingData('order').then((doc) => {
       /*  doc.forEach(doc =>{
          const id = doc.id
          const data = doc.data()
          console.log({id, data})
        }) */
        const orders = doc.docs.map(doc=>{ return { id: doc.id, ...doc.data()}});
        setOrderMaked(orders)

      }); 
    }, [orderMaked, setOrderMaked])
    
    return (
      <>
     
      <div className='Kitchen'>
        {orderMaked.map((order, index)=>(
          <CookingCard order={order} index={index}/>
        ))} 
      </div>
      </>
    )
  }

