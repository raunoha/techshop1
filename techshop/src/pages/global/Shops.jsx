import React from 'react'
import { useState } from 'react';
import Map from '../../components/Map';


function Shops() {
  const [coordinaates, setCoordinates] = useState({lngLat: [58.9332, 25.0302], zoom: 7});

  return (
    <div>
      <button onClick={() => setCoordinates({lngLat: [58.9332, 25.0302], zoom: 7})}>Kõik poed</button>
    <button onClick={() => setCoordinates({lngLat: [59.5050, 24.8266], zoom: 13})}>Viimsi</button>
    <button onClick={() => setCoordinates({lngLat: [58.3869, 24.5019], zoom: 13})}>Pärnu</button>
    <Map mapCoordinaates={coordinaates}  />
    </div>
  )
}

export default Shops