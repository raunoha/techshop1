import React from 'react'
import { useTranslation } from 'react-i18next';

function Payment(props) {
  const {t} = useTranslation();

const pay = () => {
  
    const url = "https://igw-demo.every-pay.com/api/v4/payments/oneoff"
    const data = {
      "api_username": "e36eb40f5ec87fa2",
      "account_name": "EUR3D1",
      "amount": props.sum,
      "order_reference": Math.random() * 9999998,
      "nonce": "a9b7f8f57945d79o054a01b9i802"+ new Date() + Math.random() * 9999999,
      "timestamp": new Date(),
      "customer_url": "https://superpawntechshop0011.web.app"
      }
    const headers = {
      "Authorization": "Basic ZTM2ZWI0MGY1ZWM4N2ZhMjo3YjkxYTNiOWUxYjc0NTI0YzJlOWZjMjgyZjhhYzhjZA==",
    "Content-Type": "application/json"
    }

    fetch(url, {"method": "POST", "body": JSON.stringify(data), "headers": headers})
    .then(res => res.json())
    .then(json => window.location.href = json.payment_link);   
}


  return (
    <button onClick={pay}>{t("Maksa")}</button>  
  )
}

export default Payment