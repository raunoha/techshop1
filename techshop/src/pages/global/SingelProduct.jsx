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


  const addToCart = (products) => {
    cartFromFile.push(result);
    //setProducts(productsFromFile.slice());
    toast.success("Item added cart", {
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
      <button onClick={() => addToCart()}>{t('Add to cart')}</button>
      <ToastContainer />
    </div>
  )
}

export default SingelProduct