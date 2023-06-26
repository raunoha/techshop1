import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import ChangeView from './ChangeView';
import {  useEffect, useState } from 'react';
import config from "../data/config.json"
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25,41], 
  iconAnchor: [12,41],
  popupAnchor: [2, -40],
});
L.Marker.prototype.options.icon = DefaultIcon;

function Map(props) { 
  const [shops, setShop] = useState([]);

  useEffect (() => {
    fetch(config.shopsDbUrl)
    .then(res => res.json())
    .then(json => setShop(json || []));
  }, []); 

  return (
  <div>

    <MapContainer className='map' center={props.mapCoordinaates.lngLat} zoom={props.mapCoordinaates.zoom} scrollWheelZoom={false}>
      <ChangeView center={props.mapCoordinaates.lngLat} zoom={props.mapCoordinaates.zoom} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {shops.map(shop => ( 
          <Marker key={shop.name} position={[shop.lat, shop.lng]}>
            <Popup>
              {shop.name} <br /> {shop.openTime}
                </Popup>
          </Marker>
         ) ) }
    </MapContainer> 
  </div>)
}

export default Map;


  