import { useParams } from 'react-router-dom';
import productsFromFile from "../../data/products.json";
import cartFromFile from "../../data/cart.json";
import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

function SingelProduct() {
  const { id } = useParams();
  const {t} = useTranslation();
 // const [products, setProducts] = useState(productsFromFile)
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
    toast.success(t("Item added cart"), {
    position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
  return (
    <div>
      <div>ID: {id} </div>
      <div>Name:{result.name} </div>
      <div>Price: {result.price} €</div> 
      <div>Description: {result.description}</div>
      <img  src={result.image} alt=""  /> 
      <br /> <br />
      <button onClick={() => addToCart(result)}>{t('Add to cart')}</button>
      <ToastContainer />
    </div>
  )
}

export default SingelProduct