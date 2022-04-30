import mapboxgl from 'mapbox-gl';
import React, { Ref, useEffect, useRef } from 'react';
import { environment } from './utils/environment';
import { mapRef } from './components';
import { StyledContainer } from './styles';
 
mapboxgl.accessToken = environment.VITE_MAPBOX_KEY;

function App() {
  const mapContainer: Ref<any> = useRef(null)

  useEffect(() => {
    mapRef.initialize(mapContainer)
  });

  return (
    <div>
      <StyledContainer ref={mapContainer} className="map-container" />
    </div>
  );
}

export default App;
