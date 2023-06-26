import React, { useEffect, useRef, useState } from 'react';
//import productsFromFile from "../../data/products.json";
import { Button }from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../../css/MaintainProducts.css";
import config from "../../data/config.json";


function MaintainProduct() {
const [products, setProducts] = useState([]);
const searchedRef = useRef(); 
const [loading, setLoading] = useState(true);
//const allProducts = [ ]

useEffect(() => {
  fetch(config.productsDbUrl)
  .then(res => res.json())
  .then(json => {
    setProducts(json || [])
    setLoading(false);
  });
}, []);

const deleteProduct = (index)=> {
   products.splice(index,1)
   setProducts(products.slice())
}

const searchFromProducts = () => {
  const result = products.filter(element => 
    element.name.includes(searchedRef.current.value));
  setProducts(result);
}
if (products.length === 0 ) {       //products.length === 0 oli ennem loading true
  return (
  <div>
  <div>Loading...</div>
  <img className='loading' src="/process.png" alt="Loading Icon" />
  </div>
  )
}
if (loading === true) {       
  return (
    <div>
    <div>Loading...</div>
    <img className='loading' src="/container-truck.png" alt="Loading Icon" />
    </div>
    )
}

  return (
    <div>
      <input onChange={searchFromProducts} ref={searchedRef} type="text" />
      <span>{products.length} pcs</span> <br />
      <tabel>
        <thead>
          <tr>
          <th>Picture</th>
          <th>Id</th>
          <th>Description</th>
          <th>Price</th>
          <th>Name</th>
          <th>Category </th>
          <th>Actions</th>
           </tr>
         </thead>
        <tbody>
        {products.map((product, index)=> 
        <tr key={product.id} className={product.active === true ? 'active' : "inactive" }>
         <td> <img className={product.active === true ? 'image2' : "image2-blurred"} 
         src={product.image} alt="" /></td>
         <td>{product.id} </td>         
         <td>{product.description} </td>
         <td>{product.price} </td>       
         <td>{product.name} </td>
         <td>{product.category} </td>
          <td>
          <Button onClick={() => deleteProduct(index)} variant="danger">Delete</Button>
          <Button as={Link} to={"/admin/edit-product/" + product.id} variant="warning">Edit</Button>
          </td>
        </tr>
        )}
        </tbody>
      </tabel>
    </div>
  )
}

export default MaintainProduct;