import React, { Ref, useEffect, useRef } from 'react';
import { mapRef } from '..';
import { StyledContainer } from '../styles';

export function App() {
  const mapContainer: Ref<any> = useRef(null)

  useEffect(() => {
    if (!mapRef.getMap()) {
      mapRef.initialize(mapContainer)
      mapRef.createControls()
    }
  });

  return (
    <div>
      <StyledContainer id="map" ref={mapContainer} className="map-container" />
    </div>
  );
}