import mapboxgl from 'mapbox-gl';

export class Map {
  map: any = null;
  lng!: number;
  lat!: number;
  zoom!: number;

  setMap(container: any, lng: number, lat: number, zoom: number) {
    this.lng = lng;
    this.lat = lat;
    this.zoom = zoom;

    if (this.map)
      return;

    this.map = new mapboxgl.Map({
      container: container.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.lng, this.lat],
      zoom: this.zoom
    });
  }

  createEvents() {
    if (!mapRef.map) return;
    mapRef.map.on('move', () => {
      this.lng = mapRef.map.getCenter().lng.toFixed(4);
      this.lat = mapRef.map.getCenter().lat.toFixed(4);
      this.zoom = mapRef.map.getZoom().toFixed(2);
    });
  }

  getMap() {
    return this.map;
  }
}
export const mapRef = new Map();
