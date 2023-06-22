import React, { useState } from 'react';
import productsFromFile from "../../data/products.json";
import { useTranslation } from 'react-i18next';
import "../../css/HomePage.css";


function HomePage() {
const [products, setProducts] = useState(productsFromFile);
const { t } = useTranslation();

const AZ = () => {
  products.sort((a,b) => a.name.localeCompare(b.name));
 setProducts(products.slice())
}
const ZA = () => {
  products.sort((a, b) => b.name.localeCompare(a.name));
  setProducts(products.slice())
}
const sortPriceAsc = () => {   //hinnad kasvavalt
  products.sort((a,b) => a.price - b.price);
  setProducts(products.slice());
}
const sortPriceDesc = () => {   //hinnad kahanevalt
  products.sort((a,b) => b.price - a.price);
  setProducts(products.slice());
} 
const filterByCategoryLaptops = () => {
  const result = productsFromFile.filter((product) => product.category.includes("camping"));
  setProducts(result)
}
const filterByCategoryMemorybank = () => {
  const result = productsFromFile.filter((product) => product.category.includes("motors"));
  setProducts(result)
}
const filterByCategorySmartphones = () => {
  const result = productsFromFile.filter((product) => product.category.includes("motorcycle"));
  setProducts(result)
}
const filterByCategoryJeans = () => {
  const result = productsFromFile.filter((product) => product.category.includes("motorcycle"));
  setProducts(result)
}
const filterByCategoryUsbdrive = () => {
  const result = productsFromFile.filter((product) => product.category.includes("motorcycle"));
  setProducts(result)
}

  return (
    <div>
      <button onClick= {AZ}>{t('Sort A-Z')}</button>
      <button onClick= {ZA}>{t('Sort Z-A')}</button>
      <button onClick= {sortPriceAsc}>{t('Price Ascending')}</button>
      <button onClick= {sortPriceDesc}>{t('Price Descending')}</button>
      <button onClick= {() => filterByCategorySmartphones}>{t('Category Smartphones')}</button>
      <button onClick= {() => filterByCategoryLaptops}>{t('Category Laptops')}</button>
      <button onClick= {() => filterByCategoryMemorybank}>{t('Category Memory bank')}</button>
      <button onClick= {() => filterByCategoryJeans}>{t('Category Jeans')}</button>
      <button onClick= {() => filterByCategoryUsbdrive}>{t('Category Usb drive')}</button>
      <div className='products'>
      {products.map(product => 
        <div key={product.id} className='product'>
          <img src={product.image} alt="" />
           <div className='name'>{product.name} </div>          
          <div>{product.price} </div>                 
          <div>{product.brand} </div>                
          <button>Add to cart</button>
      </div>
        )}
    </div>
    </div>
  )
}

export default HomePage;