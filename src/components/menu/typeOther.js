/* return(
  <div className='Menu-section-container'>
    <div className='Type-menu'>
      <button className='Menu-breakfast Menu-active' value='Breakfast' onClick={ (e) => setFoodType(e.target.value) }>Desayuno</button>
      <button className='Menu-other' value ='Lunch' onClick={ (e) => setFoodType(e.target.value) }>Almuerzo/Cena</button>
      {console.log(foodType)}
    </div>
    {
      Object.keys(Data.menu).filter(lunch => Data.menu[lunch].type.includes(foodType)).map((product, index) => (

      <div key={index + 'card'} className='Product-card'>
        <h3 key={index + 'price'} className='Product-price'>${ Data.menu[product].price}</h3>
        <img src={Data.menu[product].image} key={index + 'image'} alt={product} className='Product-image'/>
        <h2 key={index + 'product'} className='Product-title'>{product}</h2>
      </div>
        //<Cards data={Data.menu}, menu={product}, index={index}/>
      ))
    }
  </div>
) */
