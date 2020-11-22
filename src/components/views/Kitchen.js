import React,{ useEffect} from 'react';
import CookingCard from '../cardState/CookingCard'
import  gettingData from '../../firebaseFunc';

import '../../styles/viewsCss/Kitchen.css';

  export default function Kitchen() {

    useEffect(()=>{
      gettingData('order').then((doc) => {
        console.log(doc)
      }); 
    })
    
    return (
      <div className='Kitchen'>
        
        <CookingCard />
      </div>
    )
  }

