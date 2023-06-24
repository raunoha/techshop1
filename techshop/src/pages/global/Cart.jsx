import React, { useState } from 'react'
import { Link } from 'react-router-dom'
//import cartFromFile from "../../data/cart.json";
import { useTranslation } from 'react-i18next';



function Cart() {
  const { t } = useTranslation();
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("carts")) || []);

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
        <div>
          <img className="image" src={element.product.image} alt="" />
          <div>{element.product.name}</div>
          <div>{element.product.price} €</div>
          <button onClick={() => decreaseQuantity(index)}>-</button>
          <div>{element.quantity} pcs</div>
          <button  onClick={() => increaseQuantity(index)}>+</button>
          <div>{element.product.price * element.quantity} €</div>
          <div>{t('remove-item')}</div>
          <button onClick={() => removeFromCart(index)}>x</button>
        </div>
        ))}
      <div>
        {t('total')}: {calculateCartSum()} €.
      </div>
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