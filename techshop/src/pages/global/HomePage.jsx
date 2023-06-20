import React, { useState } from 'react';
import productsFromFile from "../../data/products.json";

function HomePage() {
const [products, setProducts] = useState(productsFromFile);

  return (
    <div>
      {products.map(product => 
        <div key={product.id}>
          <img src={product.thumbnail} alt="" />
          <div>{product.id} </div>
          <div>{product.title} </div>
          <div>{product.description} </div>
          <div>{product.price} </div>
          <div>{product.rating} </div>
          <div>{product.stock} </div>
          <div>{product.brand} </div>
          <div>{product.category} </div>
          <div>{product.thumbnail} </div>
          <button>Add to cart</button>
        </div>
        )}
    </div>
  )
}

export default HomePage;