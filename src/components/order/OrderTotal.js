import React from 'react';

import '../../styles/order/OrderTotal.css';

export default function OrderTotal({ order }) {

  console.log(order.reduce((finalTotal, { total })=> finalTotal + total, 0)) //ese total, fue idea de stackoverflow
  //const total = Object.values(add).reduce((t, {value}) => t + value, 0)
  // no las escucho por si me leen, me caí jaja :(
    
  // Nos caímos al tiempo <3  . .. Cie3rra< 3< 3y< 3<3<3
  // Cierra la sesión y vuelve a entrar, me tocó así porque no conectaba.!!!
  //Pero voy a conectarme a zoom de nuevo  creo quesí! pero aun no me deja entrar 
  // Bueno porque no podemos ver el local host
  //Sigo muerta 
  //Que mas nos falta :c?
  //lo del modal que ayer intentamos con diana
  //De que aparezca el tipo de carne y el precio del adicional 
  //Alcanzas a subir la ramita para bajarmela? o no te carga el internet :C
  //Ya esta el localhost compartido
  //voy a hacer push ! 
  // Cierra zoom y vuelve a intentar!! jajaja escribí rápido
  return (
    <div className='Order-total'>
      <h1 className='Order-total-title'>Total</h1>
      <h1 className='Order-total-number'>{'$ '+ order.reduce((finalTotal, {total})=> finalTotal + total,0) }</h1>
    </div>
  )
}
