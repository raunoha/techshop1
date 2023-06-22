import React, { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import productsFromFile from "../../data/products.json";
import Button from 'react-bootstrap/esm/Button';

function EditProduct() {
const { id } = useParams();
const found = productsFromFile.find(product => product.id === Number(id));
const index = productsFromFile.findIndex( product => product.id === Number(id));


const idRef = useRef();
const nameRef = useRef();
const priceRef = useRef();
const descriptionRef = useRef();
const imageRef = useRef();
const categoryRef = useRef();
const activeRef = useRef();
const brandRef = useRef();
const navigate = useNavigate();
//const navigate = useNavigate();
//const [idUnique, setIdUnique] = useState(true);
//const [categories, setCategories] = useState([]);
//const [loading, setLoading] = useState(true);

const changeProduct = () => {
  const updateProduct={
    "id":Number (idRef.current.value),
     "name":nameRef.current.value,
     "image":imageRef.current.value, 
     "price":Number (priceRef.current.value),
     "description":descriptionRef.current.value,
     "category":categoryRef.current.value,
     "active":activeRef.current.checked,
     "brand":brandRef.current.value,
  }
  productsFromFile[index]= updateProduct
  navigate("/admin/maintain-products");
} 
 
  return (
    <div>
     {/* <div>ID:{id}</div>
      <div>{found.name}</div>
  <div>{index}</div>*/}
  <label>ID</label>
  <input ref={idRef} type="number"defaultValue={found.id} /> <br />
  <label>Name</label>
  <input ref={nameRef} type="text"defaultValue={found.name} /> <br />
  <label>Price</label>
  <input ref={priceRef} type="number"defaultValue={found.image} /> <br />
  <label>Description</label>
  <input ref={descriptionRef} type="text"defaultValue={found.description} /> <br />
  <label>Image</label>
  <input ref={imageRef} type="text"defaultValue={found.image} /> <br />
  <label>Category</label>
  <input ref={categoryRef} type="text"defaultValue={found.category} /> <br />
  <label>Brand</label>
  <input ref={brandRef} type="text"defaultChecked={found.brand} /> <br />
  <label>Active</label>
  <input ref={activeRef} type="checkbox"defaultValue={found.active} /> <br />
   <Button onClick={changeProduct}>Change</Button>
    </div>
  )
}

export default EditProduct