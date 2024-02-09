import React ,{useState, useEffect} from 'react'
import ProductCard from './ProductCard'

function Products({user}) {
    const[last10Product, setLast10Product]= useState ([])

  useEffect(() =>{
    fetch('https://fakestoreapi.com/products?limit=20')
            .then(res=>res.json())
            .then(res=>setLast10Product(res));
  })
  return (
    <>
    <h2>Ürünler</h2>
    <div className='row row-cols-sm-3 row-cols-md-4'>
      {last10Product.map(product=>
        <ProductCard  user={user} key={product.id} item={product}/>
      )}
    </div>
    </>
  )
}

export default Products