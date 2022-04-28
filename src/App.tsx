import React, { Ref, useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { StyledSideBar, StyledContainer } from './styles';
import { mapRef } from './Map';
import { ICoords } from './ICoords';
 
mapboxgl.accessToken = 'pk.eyJ1Ijoic291c2FkaWVnbzExIiwiYSI6ImNrbWFsYXB0OTE2c3UycG51aDhyaDBwdzEifQ.ajg5MBBP9op7L6fXTMZHig';

function App() {
  const mapContainer: Ref<any> = useRef(null)
  const [coords, setCoords] = useState<ICoords>({lng: 0, lat: 0, zoom: 0})

  useEffect(() => {
    mapRef.setMap(mapContainer, -70.9, 42.35, 9)
  });

  useEffect(() => {
    mapRef.createEvents()
    setCoords({ lng: mapRef.lng, lat: mapRef.lat, zoom: mapRef.zoom })
  });

  return (
    <div>
      <StyledSideBar className="sidebar">
        Longitude: {coords.lng} | Latitude: {coords.lat} | Zoom: {coords.zoom}
      </StyledSideBar>
      <StyledContainer ref={mapContainer} className="map-container" />
    </div>
  );
}

export default App;
