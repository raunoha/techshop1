import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
//import cartFromFile from "../../data/cart.json";
import { useTranslation } from 'react-i18next';
//import omnivaFromFile from "../../data/omniva.json"
import styles from "../../css/Cart.module.css";
import { CartSumContext } from '../../store/CartSumContext';
import { ToastContainer, toast } from 'react-toastify';
import Payment from '../../components/cart/Payment';



function Cart() {
  const { t } = useTranslation();
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("carts")) || []);
  const { setCartSum } = useContext(CartSumContext);
  const [parcelMachines, setParcelMachine] = useState([]);
  const [dbparcelMachines, setDbParcelMachine] = useState([]);
  const searchedRef = useRef();

  useEffect(() => {
    fetch("https://www.omniva.ee/locations.json")
    .then(res => res.json())
    .then(json => {
      setParcelMachine(json || []);
      setDbParcelMachine(json || []);
    })
  }, []);

  const removeFromCart = (index) => {
    cart.splice(index, 1)
    setCart(cart.slice());
    localStorage.setItem("carts", JSON.stringify(cart));
    toast.success("Cart is empty!");
    setCartSum(calculateCartSum());
  }

  const decreaseQuantity = (index) => {
    cart[index].quantity--;
    if (cart[index].quantity === 0){
      removeFromCart(index);
    }
    setCart(cart.slice());
    localStorage.setItem("carts", JSON.stringify(cart));
    setCartSum(calculateCartSum());
  }

  const increaseQuantity = (index) => {
    cart[index].quantity++;
    setCart(cart.slice());
    localStorage.setItem("carts", JSON.stringify(cart));
    setCartSum(calculateCartSum());
  }

  const calculateCartSum = () => {
    let sum = 0;
    cart.forEach((element) => (sum = sum + element.product.price * element.quantity));
    return sum;
  }

  const emptyCart = () => {
    //cart = []
    //setCart(cart.slice());
    setCart([]);
    localStorage.setItem("carts", JSON.stringify([]));
    setCartSum("0.00");
  }

   const searchFromPMs = () => {
const result = dbparcelMachines.filter(pm =>
 pm.NAME.toLowerCase().replace("õ","o")
 .includes(searchedRef.current.value.toLowerCase().replace("õ","o")));
setParcelMachine(result);
  }

  return (
    <div>
      {cart.length !== 0 && <button onClick={emptyCart}>{t('Empty cart')}</button>}
      {cart.length === 1 && (
      <div>
        {t('There is')} 1  {t('item in the cart')}.
        </div>
        )}
      {cart.length >= 2 &&( 
      <div>
        {t('There are')} {cart.length}  {t('items in the cart')}.
        </div>)}
      {cart.map((element, index) => (
        <div className={styles.products} key={index}>
          <img className={styles.image} src={element.product.image} alt="" />
          <div className={styles.name}>{element.product.name}</div>
          <div className={styles.price}>{element.product.price} €</div>
          <div className={styles.quantity}>
          <img className={styles.button} onClick={() => decreaseQuantity(index)} src="/minus (1).png" alt="" />
          <div >{element.quantity} pcs</div>
          <img className={styles.button} onClick={() => increaseQuantity(index)} src="/add.png" alt="" />
          </div>
           <div className={styles.total}>
          <span>{element.product.price * element.quantity}</span>
          <img className={styles.button} src="/euro-sign.png" alt="" />
           </div>
          {/* <div>{t('remove-item')}</div> */}
          <img className={styles.button} onClick={() => removeFromCart(index)} src="/bin.png" alt="" />
        </div>
        ))}

     {cart.length > 0 && 
     <div>
      <div>  {t('Total')}: {calculateCartSum()} €.</div>
      
      <input type="text" ref={searchedRef}  onChange={searchFromPMs}/>
        <select>
          {parcelMachines
          .filter(pm => pm.ZIP !== "96331")
          .filter(pm => pm.A0_NAME === "EE")
          .map(pm => <option key={pm.NAME}>{pm.NAME}</option>) } 
          </select><br />
          <Payment sum={calculateCartSum()} /> 
      </div>}

      {cart.length === 0 && (
      <div>
        {t('Shopping cart is empty')}.  
      <Link to="/homepage/">{t('Add products')}</Link> {" "}
      <br />
       <div className='shoppingcart3-con'>
        <img src="shopping-cart (3).png" alt=""  /></div>
      </div>)}
      <br /> <br />
      <ToastContainer 
    position="bottom-right"
    />
    </div>
  )
}

export default Cart