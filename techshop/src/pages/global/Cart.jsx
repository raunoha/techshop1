import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
//import cartFromFile from "../../data/cart.json";
import { useTranslation } from 'react-i18next';
//import omnivaFromFile from "../../data/omniva.json"
import "../../css/Cart.css";



function Cart() {
  const { t } = useTranslation();
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("carts")) || []);
  const [parcelMachines, setParcelMachine] = useState([]);
  const searchedRef = useRef();

  useEffect(() => {
    fetch("https://www.omniva.ee/locations.json")
    .then(res => res.json())
    .then(json => setParcelMachine(json))
  }, []);

  const removeFromCart = (index) => {
    cart.splice(index, 1)
    setCart(cart.slice());
    localStorage.setItem("carts", JSON.stringify(cart));
  }

  const decreaseQuantity = (index) => {
    cart[index].quantity--;
    if (cart[index].quantity === 0){
      removeFromCart(index);
    }
    setCart(cart.slice());
    localStorage.setItem("carts", JSON.stringify(cart));
  }

  const increaseQuantity = (index) => {
    cart[index].quantity++;
    setCart(cart.slice());
    localStorage.setItem("carts", JSON.stringify(cart));
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
  }

 

  const searchFromPMs = () => {
const result = parcelMachines.filter(pm =>
 pm.NAME.toLowerCase().replace("õ","o")
 .includes(searchedRef.current.value.toLowerCase().replace("õ","o")));
setParcelMachine(result);
  }

  return (
    <div>
      {cart.length !== 0 && <button onClick={emptyCart}>{t('empty-cart')}</button>}
      {cart.length === 1 && (
      <div>
        {t('there-is')} 1  {t('item-in-the-cart')}.
        </div>
        )}
      {cart.length >= 2 &&( 
      <div>
        {t('there-are')} {cart.length}  {t('items-in-the-cart')}.
        </div>)}
      {cart.map((element, index) => (
        <div className='cart-products' key={index}>
          <img className="image" src={element.product.image} alt="" />
          <div className='name'>{element.product.name}</div>
          <div className='price'>{element.product.price} €</div>
          <div className='quantity'>
          <img className='button' onClick={() => decreaseQuantity(index)} src="/minus (1).png" alt="" />
          <div >{element.quantity} pcs</div>
          <img className='button' onClick={() => increaseQuantity(index)} src="/add.png" alt="" />
          </div>
           <div className='total'>
          <span>{element.product.price * element.quantity}</span>
          <img className='button' src="/euro-sign.png" alt="" />
           </div>
          {/* <div>{t('remove-item')}</div> */}
          <img className='button' onClick={() => removeFromCart(index)} src="/bin.png" alt="" />
        </div>
        ))}

     {cart.length > 0 && 
     <div>
      <div>  {t('total')}: {calculateCartSum()} €.</div>
      <input type="text" ref={searchedRef}  onChange={searchFromPMs}/>
        <select>
          {parcelMachines
          .filter(pm => pm.ZIP !== "96331")
          .filter(pm => pm.A0_NAME === "EE")
          .map(pm => <option key={pm.NAME}>{pm.NAME}</option>) } 
          </select>
      </div>}

      {cart.length === 0 && (
      <div>
        {t('shopping-cart-is-empty')}.  
      <Link to="/homepage/">{t('add-products')}</Link> {" "}
      <br />
       <div className='shoppingcart3-con'>
        <img src="shopping-cart (3).png" alt=""  /></div>
      </div>)}
      <br /> <br />
    </div>
  )
}

export default Cart