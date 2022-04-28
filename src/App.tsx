import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import styled from 'styled-components';
 
mapboxgl.accessToken = 'pk.eyJ1Ijoic291c2FkaWVnbzExIiwiYSI6ImNrbWFsYXB0OTE2c3UycG51aDhyaDBwdzEifQ.ajg5MBBP9op7L6fXTMZHig';

const StyledContainer = styled.div`
  height: 90vh;
  padding: 0;
  margin: 0;
`

const StyledSideBar = styled.div `
  background-color: rgba(35, 55, 75, 0.9);
  color: #fff;
  padding: 6px 12px;
  font-family: monospace;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  margin: 12px;
  border-radius: 4px;
`

function App() {
  const mapContainer: any = useRef(null)
  const map: any = useRef(null)

  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <div>
      <StyledSideBar className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </StyledSideBar>
      <StyledContainer ref={mapContainer} className="map-container" />
    </div>
  );
}

export default App;
