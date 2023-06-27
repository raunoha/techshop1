import React, { useEffect, useRef, useState } from 'react';
//import productsFromFile from "../../data/products.json";
import { Button }from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../../css/MaintainProducts.css";
import config from "../../data/config.json";
import SortButtons from '../../home/SortButtons';


function MaintainProduct() {
const [products, setProducts] = useState([]);
const [dbProducts, setDbProducts] = useState([]);
const searchedRef = useRef(); 
const [loading, setLoading] = useState(true);

//const allProducts = [ ]

useEffect(() => {
  fetch(config.productsDbUrl)
  .then(res => res.json())
  .then(json => {
    setProducts(json || [])
    setDbProducts(json || [])
    setLoading(false);
  });
}, []);

const deleteProduct = (product)=> {
  const index = dbProducts.findIndex(element => element.id === product.id);
  dbProducts.splice(index,1);
   setDbProducts(dbProducts.slice());
   setProducts(dbProducts.slice());
   searchFromProducts();
   fetch(config.productsDbUrl,  {"method": "PUT","body":JSON.stringify(dbProducts)});
}

const searchFromProducts = () => {
  const result = dbProducts.filter(element => 
    element.name.includes(searchedRef.current.value));
  setProducts(result);
}
/* if (products.length === 0 ) {       //products.length === 0 oli ennem loading true
  return (
  <div>
  <div>Loading...</div>
  <img className='loading' src="/process.png" alt="Loading Icon" />
  </div>
  )
} */
if (loading === true) {       
  return (
    <div>
    <div>Loading...</div>
    <img className='loading' src="/container-truck.png" alt="" />
    </div>
    )
}

  return (
    <div>
      <input onChange={searchFromProducts} ref={searchedRef} type="text" />
      <span>{products.length} pcs</span> <br />
      <SortButtons products={products} setProducts={setProducts} />
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
          <Button onClick={() => deleteProduct(product)} variant="danger">Delete</Button>
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