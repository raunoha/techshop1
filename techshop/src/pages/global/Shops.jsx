import React, { useEffect } from 'react'
import { useState } from 'react';
import Map from '../../components/Map';
import config from "../../data/config.json"
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';


function Shops() {
  const [coordinaates, setCoordinates] = useState({lngLat: [58.9332, 25.0302], zoom: 7});
  const [shops, setShops] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    fetch(config.shopsDbUrl)
    .then(res => res.json())
    .then(json => setShops(json || []));
  }, []); 

  return (
    <div>
      <Button variant="text" onClick={() => setCoordinates({lngLat: [58.9332, 25.0302], zoom: 7})}>{t("Kõik poed")}</Button>
<div>{shops.map(item => <div key={item.name}> <Button variant="text" onClick={()  => setCoordinates({lngLat: [item.lat, item.lng], zoom: 13})}>{item.name}</Button> </div> )} 

   {/* <button onClick={() => setCoordinates({lngLat: [58.9332, 25.0302], zoom: 7})}>Kõik poed</button>
    <button onClick={() => setCoordinates({ lngLat: [59.5050, 24.8266], zoom: 11 })}>Tallinna pood</button> */}
    {/*<button onClick={() => setCoordinates({lngLat: [59.5050, 24.8266], zoom: 13})}>Viimsi</button> */}
   {/* <button onClick={() => setCoordinates({lngLat: [58.3869, 24.5019], zoom: 13})}>Pärnu</button>*/}
    
   
</div>
    <Map mapCoordinaates={coordinaates}  />
    </div>
  )
}

export default Shops;
// siin oleks vaja midagi veel teha