import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Fav({ user }) {
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    setFavs(JSON.parse(localStorage.getItem('favs')) ?? []);
  }, []);

  
  if (!user) {
    return null; 
  }//derste öğrettiğiniz kodları kulanıyorum ama yine de bilgisayarımda favori ürünleri listeleyemiyorum.

  return (
    <>
      <h1>Favoriler</h1>
      <ul>
        {favs.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <div className="list-group">
        {favs.map((item) => (
          <Link
            key={item.id}
            className="list-group-item list-group-item-action"
            to={`/products/product/${item.id}`}
          >
            {item.title.toUpperCase()}
          </Link>
        ))}
      </div>
    </>
  );
}

export default Fav;

    
