import React, { useRef, useState } from 'react'
import { Button }from "react-bootstrap";
import productsFromFile from "../../data/products.json";
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';

function AddProduct() {
  const {t} = useTranslation();
const [message, setMessage] = useState("Add new product");

const nameRef = useRef();
const imageRef = useRef();
const priceRef = useRef();
const categoryRef = useRef();
const descriptionRef = useRef();
const activeRef = useRef();
const idRef = useRef();

const add = () =>{
  if (nameRef.current.value === "") {
    setMessage("Product can t add empty name");
  } else {
    setMessage("Product add: " + nameRef.current.value); 
    productsFromFile.push({
      "id":Number (idRef.current.value),
      "image": imageRef.current.value,
      "name": nameRef.current.value,
      "price": Number (priceRef.current.value),
      "description": descriptionRef.current.value,
      "category": categoryRef.current.value,
      "active": activeRef.current.checked
    } );
    toast.success("New product added")
  }
};

  return (
    <div>
      <div>{message} </div>
      <label>New Id</label> <br />
      <input ref={idRef} type="number" /> <br />
      <label>New Name</label> <br />
      <input ref={nameRef} type="text" /> <br />
      <label>New Price</label> <br />
      <input ref={priceRef} type="number" /> <br />
      <label>New Description</label> <br />
      <input ref={descriptionRef} type="text" /> <br />
      <label>New Image</label> <br />
      <input ref={imageRef} type="text" /> <br />
      <label>New Category</label> <br />
      <input ref={categoryRef} type="text" /> <br />
      <label>Active</label> <br />
       <input ref={activeRef} type="checkbox"  /> <br />
       <Button onClick={add} >{t('Add Product')}</Button>
       <ToastContainer 
       position="bottom-right"
       />
      </div>
  )
}

export default AddProduct