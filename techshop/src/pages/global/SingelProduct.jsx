import { useParams } from 'react-router-dom';
import productsFromFile from "../../data/products.json";
import cartFromFile from "../../data/cart.json";
import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

function SingelProduct() {
  const { id } = useParams();
  const {t} = useTranslation();
 const [products, setProducts] = useState(productsFromFile)
 const found = products.find(product => product.id === Number(id));
  const result = productsFromFile.find((product) => product.id === Number(id));


  const addToCart = (productClicked) => {
    const index = cartFromFile.findIndex(element => element.product.id === productClicked.id);
   if (index >= 0) {
    cartFromFile[index].quantity++;
   } else {
    cartFromFile.push({"product":productClicked,"quantity": 1})
   }
    // cartFromFile.push(result);
    //setProducts(productsFromFile.slice());
    toast.success(t("Item added cart!"), {
    position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
  return (
    <div>
       {found === undefined && (
        <div>
       <div>Can t find product!</div>
       <img className="moving-icon" src="/not-found.png" alt="Icon 1" />
       <img className="moving-icon" src="/error.png" alt="Icon 2" />
      <img className="moving-icon" src="/wifi.png" alt="Icon 3" />
       </div>
)}
 {found !== undefined &&
      <div>
      <div>ID: {id} </div>
      <div>Name:{result.name} </div>
      <div>Price: {result.price} €</div> 
      <div>Description: {result.description}</div>
      <img  src={result.image} alt=""  /> 
      <br /> <br />
      <button onClick={() => addToCart(result)}>{t('Add to cart')}</button>
      <ToastContainer />
      </div>}
    </div>
  )
}

export default SingelProduct