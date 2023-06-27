import React from 'react'
import { useTranslation } from 'react-i18next';

function SortButtons(props) {
    const { t } = useTranslation();
    const AZ = () => {
        props.products.sort((a, b) => a.name.localeCompare(b.name));
        props.setProducts(props.products.slice())
      }
      const ZA = () => {
        props.products.sort((a, b) => b.name.localeCompare(a.name));
        props.setProducts(props.products.slice())
      }
      const sortPriceAsc = () => {   
        props.products.sort((a,b) => a.price - b.price);
        props.setProducts(props.products.slice());
      }
      const sortPriceDesc = () => {  
        props.products.sort((a,b) => b.price - a.price);
        props.setProducts(props.products.slice());
      } 
  return (
    <div>
         <button onClick= {AZ}>{t('Sort A-Z')}</button>
      <button onClick= {ZA}>{t('Sort Z-A')}</button>
      <button onClick= {sortPriceAsc}>{t('Price Ascending')}</button>
      <button onClick= {sortPriceDesc}>{t('Price Descending')}</button>
    </div>
  )
}

export default SortButtons