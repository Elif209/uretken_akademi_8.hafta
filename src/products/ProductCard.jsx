import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard({item, user} ) {
  const productUrl=`/products/product/${item.id}`
  
  
  function handleClick(product)  
  {
     let localFavs=JSON.parse(localStorage.getItem("favs"))??[]
     let itemIndex=localFavs.findIndex(localItem => product.id===localItem.id )
     if(itemIndex>=0){
      localFavs=localFavs.filter(item=>item.id!==product.id)
     }
     else{
      localFavs.push({id:product.id,title:product.title})
     }

     localStorage.setItem("favs",JSON.stringify(localFavs))
  }
  function handleAddToCard(product) {
    let localCard = JSON.parse(localStorage.getItem("card")) ?? [];
    let itemIndex = localCard.findIndex(item => product.id === item.id);

    if (itemIndex >= 0) {
       
        localCard = localCard.filter(item => item.id !== product.id);
    } else {
        // Ürün sepette yok, bu yüzden sepete ekleyebiliriz
        localCard.push({ id: product.id, title: product.title, quantity: 1 });
    }

    localStorage.setItem("card", JSON.stringify(localCard));
}

  return (
    <div className='col-sm mb-3'>
    <div className="card" >
    <Link to={productUrl}>
    <img src={item.image} className="card-img-top" alt={item.title}/>
    </Link>
  <div className="card-body">
    <h5 className="card-title">{item.title}</h5>
    <p className="card-text">{item.description.substring(0,25)}...</p>
    <p className='lead'> {item.price}</p>
    {user && <a href="#" 
    className="btn btn-primary mr-4"
    onClick={()=>handleClick(item) }
    >Fav</a>}
    {user && <a href="#" 
    className="btn btn-warning"
    onClick={()=>handleAddToCard(item) }
    >Add to card</a>}

  </div>
  </div>
  </div>

  )
}

export default ProductCard