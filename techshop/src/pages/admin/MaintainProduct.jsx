import React, { useRef, useState } from 'react';
import productsFromFile from "../../data/products.json";
import { Button }from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../../css/MaintainProducts.css";

function MaintainProduct() {
const [products, setProducts] = useState(productsFromFile);
const searchedRef = useRef(); 
//const allProducts = [ ]

const deleteProduct = (index)=> {
   productsFromFile.splice(index,1)
   setProducts(productsFromFile.slice())
}

const searchFromProducts = () => {
  const result = productsFromFile.filter(element => 
    element.name.includes(searchedRef.current.value));
  setProducts(result);
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