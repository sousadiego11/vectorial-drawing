import mapboxgl from 'mapbox-gl';

export class Map {
  map: any = null;

  initialize(container: any) {
    const lng = -70.9;
    const lat = 42.35;
    const zoom = 9;

    if (this.map)
      return;

    this.map = new mapboxgl.Map({
      container: container.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });
  }

  getMap() {
    return this.map;
  }
}
export const mapRef = new Map();
