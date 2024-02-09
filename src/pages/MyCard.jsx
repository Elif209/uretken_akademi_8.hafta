import React,{ useEffect, useState } from 'react'

function MyCard({user}) {
    const [addToCard,setAddToCard]= useState([])

 useEffect(()=>{
  setAddToCard(JSON.parse(localStorage.getItem('addToCard'))??[]);
 },[])
    

  return (
    <>
    <h1>Sepetim</h1>
    <ul>
      {addToCard.map((item) => 
        <li key={item.id}>
          {item.title}
        </li>
      )}
    </ul>
    <div className="list-group">
      {addToCard.map((item)=>
      <Link
      key={item.id}
      className="list-group-item list-group-item-action"
      to={`/products/product/${item.id}`}>
        {item.title.toUpperCase()}
        </Link>
        
        )}
    </div>


    </>
  )
}

export default MyCard