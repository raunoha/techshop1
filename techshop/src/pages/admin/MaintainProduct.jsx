import React, { useState } from 'react';
import productsFromFile from "../../data/products.json";

function MaintainProducts() {
const [products, setProducts] = useState(productsFromFile);

  return (
    <div>
      {products.map(product => 
        <div>
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
          <div>{product.image} </div>
          <button>Delete</button>
          <button>Edit</button>
        </div>
        )}
    </div>
  )
}

export default MaintainProducts;