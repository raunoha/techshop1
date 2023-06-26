import React, { useEffect, useRef, useState } from 'react';
import config from "../../data/config.json";
//import { ToastContainer, toast } from 'react-toastify';
import { Button } from 'react-bootstrap';
//import { useTranslation } from 'react-i18next';

function MaintainShops() {
  const [shops, setShops] = useState([]);
  const nameRef = useRef();
  const openTimeRef = useRef();
  const latitudeRef = useRef();
  const longitudeRef = useRef();
  //const { t } = useTranslation();

  useEffect(() => {
    fetch(config.shopsDbUrl)
.then(res => res.json())
.then(json => setShops(json || []));
  }, []);

  const addShop = () => {  
    shops.push ({ 
    "name": nameRef.current.value,
    "openTime": openTimeRef.current.value,
    "lat": latitudeRef.current.value,
    "lng": longitudeRef.current.value,
    })
   setShops(shops.slice());
   fetch(config.shopsDbUrl,
    {"method": "PUT", "body": JSON.stringify(shops)});
    nameRef.current.value = "";
    openTimeRef.current.value = "";
    latitudeRef.current.value = "";
    longitudeRef.current.value = "";
    }
  

  const deleteShop = (index) => {
    shops.splice(index,1); //igakord kui splice siis on vaja need panna
    setShops(shops.slice());
     fetch(config.shopsDbUrl, 
     {"method":"PUT", "body":JSON.stringify(shops)});
   }


  return (
    <div>
      <label>Name </label> <br />
      <input type="text" ref={nameRef} />
     <br />
     <label > Open Time</label> <br />
     <input type="text" ref={openTimeRef} />
      <br />
      <label > Latitude</label> <br />
     <input type="text" ref={latitudeRef} /> <br />
     <label >Longitude</label><br />
     <input type="text" ref={longitudeRef} /><br />
    <button onClick={addShop} >Add Shop</button>
    <div>
  {shops.map((shop,i) =><div key={i}> {shop.name} <br />{shop.openTime} <br />
  {shop.lat} <br /> {shop.lng} 
  <Button onClick={() => deleteShop(i)}>X</Button>
  </div>)}
   </div>

     {/* <input onKeyUp={addShop} ref={shopRef} type="text" /> <br />
      <button onClick={addShop}>Add shops</button> <br />
      <div>
        {shops.map((shop, i) => <div key={i}>{shop.name} <button onClick={() => deleteCategory(i)}>X</button></div>)}
      </div> */}
      </div>
  )
}

export default MaintainShops
/*return (
    <div>
    <ToastContainer />
    {shops.map((element, index) => (
      <div key={index}>
        <div>{element.name}</div>
        <div>{element.latitude}</div>
        <div>{element.longitude}</div>
        <Button onClick={() => deleteShop(index)}>x</Button>
      </div>
    ))}
    {message} <br />
    <label>Shops name:</label> <br />
    <input ref={nameRef} type="text" /><br />
    <label>Open time:</label><br />
    <input ref={openTimeRef} type="text" /><br />
    <label>Latitude:</label><br />
    <input ref={latitudeRef} type="text" /><br />
    <label>Longitude:</label><br />
    <input ref={longitudeRef} type="text" /><br />
    <Button onClick={addShop}>Add</Button><br />
  </div>
);
} */