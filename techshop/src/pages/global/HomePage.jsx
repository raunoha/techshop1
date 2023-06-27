import React, { useContext, useEffect, useState } from 'react';
//import productsFromFile from "../../data/products.json";
//import cartFromFile from "../../data/cart.json";
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import styles from "../../css/HomePage.module.css";
import { Link } from 'react-router-dom';
import config from "../../data/config.json";
import SortButtons from '../../home/SortButtons';
import { CartSumContext } from '../../store/CartSumContext';


function HomePage() {
const [products, setProducts] = useState([]);
const [dbProducts, setDbProducts] = useState ([]); // oli prductsfromfile
const { t } = useTranslation();
const [categories, setCategories] = useState([]);
const [loading, setLoading] = useState(true);
const { setCartSum } = useContext(CartSumContext)


useEffect(() => {
  fetch(config.productsDbUrl)
  .then(res => res.json())
  .then(json => {
    setProducts(json || [])
    setDbProducts(json || [])
    setLoading(false);
  });

  fetch(config.categoriesDbUrl)
  .then(res => res.json())
  .then(json => setCategories(json || []));
}, []);

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
    let sum = 0;
    cartLS.forEach((element) => (sum = sum + element.product.price *element.quantity));
    setCartSum(sum);
};

const filterByCategory = (categoryClicked) => {  
  const result = dbProducts.filter((product) => 
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

if (loading === true) {       
  return (
  <div>
  <div>Loading...</div>
  <img className='loading' src="/work-in-progress.png" alt="Loading Icon" />
  </div>
  )
}
  return (
    <div>
     <SortButtons 
     products={products}
     setProducts={setProducts}
     />
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
      <div className={styles.products}>
      {products.filter(e => e.active === true).map((product, id) => (
        <div key={product.id} className={styles.product}>
          <Link to={"/product/" + product.id}>
          <img src={product.image} alt="" />
           <div className={styles.name}>{product.name} </div>          
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