import React, { useRef, useState } from 'react';
import productsFromFile from "../../data/products.json";
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';

function MaintainProducts() {
const [products, setProducts] = useState(productsFromFile);
const searchedRef = useRef(); 
const allProducts = [ ]

const deleteProduct = ()=> {
   
}

const searchedFromProducts =() => {
  const result = productsFromFile.filter(element => element.name.includes(searchedRef.current.value))
  setProducts(result);
}

  return (
    <div>
      <input onChange={searchedFromProducts} ref={searchedRef} type="text" />
      <span>{products.length} pcs</span>
      {products.map(product => 
        <div key={product.id}>
          <img src={product.image} alt="" />
          <div>{product.id} </div>
          <div>{product.title} </div>
          <div>{product.description} </div>
          <div>{product.price} </div>       
          <div>{product.brand} </div>
          <div>{product.category} </div>
          <div>{product.image} </div>
          <div>{product.active} </div>
          <Button variant="danger">Delete</Button>
          <Button as={Link} to={"/admin/edit-product/" + product.id} variant="warning">Edit</Button>
        </div>
        )}
    </div>
  )
}

export default MaintainProducts;