import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
//import productsFromFile from "../../data/products.json";
import Button from 'react-bootstrap/esm/Button';
import config from "../../data/config.json";

function EditProduct() {
const { id } = useParams();
const [products, setProducts] = useState([]);
const found = products.find(product => product.id === Number(id));
const index = products.findIndex( product => product.id === Number(id));


const idRef = useRef();
const nameRef = useRef();
const priceRef = useRef();
const descriptionRef = useRef();
const imageRef = useRef();
const categoryRef = useRef();
const activeRef = useRef();
//const brandRef = useRef();
const navigate = useNavigate();
const [idUnique, setIdUnique] = useState(true);
const [categories, setCategories] = useState([]);
const [loading, setLoading] = useState(true);



useEffect(() => {
  fetch(config.productsDbUrl)
  .then(res => res.json())
  .then(json => {
    setProducts(json || [])
    setLoading(false);
  });
}, []);

useEffect(() => {
  fetch(config.categoriesDbUrl)
  .then(res => res.json())
  .then(json => setCategories(json || []));
}, []);

const changeProduct = () => {
  if (idRef.current.value === "") {
    return;
      }
  if (nameRef.current.value === "") {
return;
  }
  if (priceRef.current.value === "") { 
  return;
}
if (Number(priceRef.current.value) <=0 ) {
  return;
}
  const updateProduct={
    "id":Number (idRef.current.value),
     "name":nameRef.current.value,
     "image":imageRef.current.value, 
     "price":Number (priceRef.current.value),
     "description":descriptionRef.current.value,
     "category":categoryRef.current.value,
     "active":activeRef.current.checked,
     //"brand":brandRef.current.value,
  }
  products[index]= updateProduct;
  fetch(config.productsDbUrl, {"method": "PUT","body":JSON.stringify(products)})
  .then(() => navigate("/admin/maintain-product"));

} 

const checkIdUniqueness = () => {
  if (idRef.current.value === id) {
    setIdUnique(true);
return;
  }
const index =  products.findIndex(element => element.id === Number(idRef.current.value));
 if (index === -1) {
  setIdUnique(true);
 } else {
  setIdUnique(false);
 }
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
   {found!== undefined && 
   <div>
  {idUnique === false &&  <div>Inserted ID is not unique!</div>} 
  <br />
  <label>ID</label>
  <input onChange={checkIdUniqueness} ref={idRef} type="number"defaultValue={found.id} /> <br />
  <label>Name</label>
  <input ref={nameRef} type="text"defaultValue={found.name} /> <br />
  <label>Price</label>
  <input ref={priceRef} type="number"defaultValue={found.price} /> <br />
  <label>Description</label>
  <input ref={descriptionRef} type="text"defaultValue={found.description} /> <br />
  <label>Image</label>
  <input ref={imageRef} type="text"defaultValue={found.image} /> <br />
  <label>Category</label>
  <select ref={categoryRef} defaultValue={found.category}> 
     {categories.map(category => <option key={category.name}>{category.name}</option>)}
      </select> <br />
  {/*<input ref={categoryRef} type="text"defaultValue={found.category} /> <br /> */}
  {/*<label>Brand</label>
  <input ref={brandRef} type="text"defaultChecked={found.brand} /> <br /> */}
  <label>Active</label>
  <input ref={activeRef} type="checkbox"defaultValue={found.active} /> <br />
   <Button disabled={idUnique === false} onClick={changeProduct}>Change</Button>
    </div>}
   {found === undefined ? (  
   <>
   <div>Not found!</div>
    <img className="moving-icon" src="/not-found.png" alt="Icon 1" />
   <img className="moving-icon" src="/error.png" alt="Icon 2" />
   <img className="moving-icon" src="/wifi.png" alt="Icon 3" />
   </> ) :null }
    </div>
  )
}

export default EditProduct