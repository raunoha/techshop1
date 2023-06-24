import React, { useState } from 'react';
import productsFromFile from "../../data/products.json";
//import cartFromFile from "../../data/cart.json";
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import "../../css/HomePage.css";
import { Link } from 'react-router-dom';


function HomePage() {
const [products, setProducts] = useState(productsFromFile);
const { t } = useTranslation();

const AZ = () => {
  products.sort((a, b) => a.name.localeCompare(b.name));
 setProducts(products.slice())
}
const ZA = () => {
  products.sort((a, b) => b.name.localeCompare(a.name));
  setProducts(products.slice())
}
const sortPriceAsc = () => {   
  products.sort((a,b) => a.price - b.price);
  setProducts(products.slice());
}
const sortPriceDesc = () => {  
  products.sort((a,b) => b.price - a.price);
  setProducts(products.slice());
} 
const filterByCategoryLaptops = () => {
  const result = productsFromFile.filter((product) =>
   product.category.includes("laptops"));
  setProducts(result)
}
const filterByCategoryMemorybank = () => {
  const result = productsFromFile.filter((product) => 
  product.category === "memory bank");
  setProducts(result)
}
const filterByCategorySmartphones = () => {
  const result = productsFromFile.filter((product) => 
  product.category === "smartphones");
  setProducts(result)
}
const filterByCategoryJeans = () => {
  const result = productsFromFile.filter((product) =>
  product.category === "jeans");
  setProducts(result)
}
const filterByCategoryUsbdrive = () => {
  const result = productsFromFile.filter((product) => 
  product.category === "usb drive");
  setProducts(result)
}
const filterByCategoryRobot= () => {
  const result = productsFromFile.filter((product) => 
  product.category === "robot vacuum");
  setProducts(result)
}
const filterByCategoryOthers = () => {
  const categoriesToFilter = ["fragrances", "skincare", "groceries", "home-decoration"];

  const result = productsFromFile.filter((product) => 
    categoriesToFilter.includes(product.category)
  );

  setProducts(result);
}

const add = (productClicked) => {
  const cartLS = JSON.parse(localStorage.getItem("carts")) || [];
  const index = cartLS.findIndex(element => 
    element.product.id === productClicked.id);
  if (index >= 0) {
    cartLS[index].quantity++;
  } else {
    cartLS.push({ "product": productClicked, "quantity": 1});
  }
  localStorage.setItem("carts", JSON.stringify(cartLS) );
    toast.success("Product added!");
}

  return (
    <div>
      <button onClick= {AZ}>{t('Sort A-Z')}</button>
      <button onClick= {ZA}>{t('Sort Z-A')}</button>
      <button onClick= {sortPriceAsc}>{t('Price Ascending')}</button>
      <button onClick= {sortPriceDesc}>{t('Price Descending')}</button>
      <button onClick= {filterByCategorySmartphones}>{t('Category Smartphones')}</button>
      <button onClick= {filterByCategoryLaptops}>{t('Category Laptops')}</button>
      <button onClick= {filterByCategoryMemorybank}>{t('Category Memory bank')}</button>
      <button onClick= {filterByCategoryJeans}>{t('Category Jeans')}</button>
      <button onClick= {filterByCategoryUsbdrive}>{t('Category Usb drive')}</button>
      <button onClick= {filterByCategoryRobot}>{t('Category Robot vacuum')}</button>
      <button onClick= {filterByCategoryOthers}>{t('Category Others')}</button>
     <div>{products.length} </div>
      <div className='products'>
      {products.map(product => 
        <div key={product.id} className='product'>
          <Link to={"/product/" + product.id}>
          <img src={product.image} alt="" />
           <div className='name'>{product.name} </div>          
          <div>{product.price} €</div>   
          </Link>              
                         
          <button onClick={() => add(product) }>Add to cart</button>
      </div>
        )}
    </div>
    <ToastContainer position="bottom-right"/> 
    </div>
  )
}

export default HomePage;