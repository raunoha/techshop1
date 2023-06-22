import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import cartFromFile from "../../data/cart.json";
import { useTranslation } from 'react-i18next';



function Cart() {
  const { t } = useTranslation();
  const [cart, setCart] = useState(cartFromFile);

  const removeFromCart = (index) => {
    cartFromFile.splice(index, 1)
    setCart(cartFromFile.slice());
  }

  const calculateCartSum = () => {
    let sum = 0;
    cartFromFile.forEach((product) => (sum = sum + product.price));
    return sum;
  }

  const emptyCart = () => {
    cartFromFile = []
    setCart(cartFromFile.slice());
  }

  return (
    <div>
      {cart.length !== 0 && <button onClick={emptyCart}>{t('empty-cart')}</button>}
      {cart.length === 1 && (
      <div>
        {t('there-is')} 1  {t('item-in-the-cart')}.
        </div>
        )}
      {cart.length >= 2 && <div>{t('there-are')} {cart.length}  {t('items-in-the-cart')}.</div>}
      {cart.map((product, index) =>
        <div>
          <img className="image" src={product.image} alt="" />
          <div>{product.name}</div>
          <div>{product.price}</div>
          <div>{t('remove-item')}</div>
          <button onClick={() => removeFromCart(index)}>x</button>
        </div>
        )}
      <div>
        {t('total')}: {calculateCartSum()} €.
      </div>
      {cart.length === 0 && (
      <div>
        {t('shopping-cart-is-empty')}.  
      <Link to="/homepage/">{t('add-products')}</Link> {""}
      <br /> <img src="images.jpeg" alt="" /></div>)}
      <br /> <br />
    </div>
  )
}

export default Cart