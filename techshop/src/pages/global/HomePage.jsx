import React, { useEffect, useState } from 'react';
//import productsFromFile from "../../data/products.json";
//import cartFromFile from "../../data/cart.json";
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import "../../css/HomePage.css";
import { Link } from 'react-router-dom';
import config from "../../data/config.json";

function HomePage() {
const [products, setProducts] = useState([]); // oli prductsfromfile
const { t } = useTranslation();
const [categories, setCategories] = useState([])
const [loading, setLoading] = useState(true);

useEffect(() => {
  fetch(config.productsDbUrl)
  .then(res => res.json())
  .then(json => {
    setProducts(json || [])
    setLoading(false);
  });


  fetch(config.categoriesDbUrl)
  .then(res => res.json())
  .then(json => setCategories(json || []));
}, []);

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
const filterByCategory = (categoryClicked) => {  //Hiljem muutmine
  const result = products.filter((product) => 
  product.category === categoryClicked);
  setProducts(result);
}
const filterByCategoryOthers = () => {
  const categoriesToFilter = ["fragrances", "skincare", "groceries", "home-decoration"];
  const result = products.filter((product) => 
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
    toast.success(t("Product added!"));
};

if (loading === true) {       //products.length === 0 oli ennem loading true
  return (
  <div>
  <div>Loading...</div>
  <img className='loading' src="/work-in-progress.png" alt="Loading Icon" />
  </div>
  )
}
  return (
    <div>
      <button onClick= {AZ}>{t('Sort A-Z')}</button>
      <button onClick= {ZA}>{t('Sort Z-A')}</button>
      <button onClick= {sortPriceAsc}>{t('Price Ascending')}</button>
      <button onClick= {sortPriceDesc}>{t('Price Descending')}</button>
      {/* <button onClick= {() => filterByCategory("smartphones") }>{t('Category Smartphones')}</button>
      <button onClick= {() => filterByCategory("laptops")  }>{t('Category Laptops')}</button>
      <button onClick= {() => filterByCategory("memory bank") }>{t('Category Memory bank')}</button>
      <button onClick= {() => filterByCategory("jeans") }>{t('Category Jeans')}</button>
      <button onClick= {() => filterByCategory("usb drive") }>{t('Category Usb drive')}</button>
      <button onClick= {() => filterByCategory("robot vacuum") }>{t('Category Robot vacuum')}</button>*/}
  <button onClick= {filterByCategoryOthers}>{t('Category Others')}</button> 
  {categories.map(category =>
  <button key={category.name} onClick= {() => filterByCategory(category.name) }>
    {category.name}</button>
    )}
     <div>{products.length} pcs</div>
      <div className='products'>
      {products.filter(e => e.active === true).map((product, id) => (
        <div key={product.id} className='product'>
          <Link to={"/product/" + product.id}>
          <img src={product.image} alt="" />
           <div className='name'>{product.name} </div>          
          <div>{product.price} €</div>   
          </Link>       
          <button onClick={() => add(product) }>{t("Add to cart")}</button>
      </div>
        ))}
    </div>
    <ToastContainer position="bottom-right"/> 
    </div>
  )
}

export default HomePage;