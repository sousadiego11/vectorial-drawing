import MapboxDraw from "@mapbox/mapbox-gl-draw";
import mapboxgl from 'mapbox-gl';
import { environment } from '../../utils';
export class Map {
  map!: mapboxgl.Map
  draw!: MapboxDraw
  features!: GeoJSON.FeatureCollection

  getMap(): mapboxgl.Map {
    return this.map;
  }
  
  getFeatures(): GeoJSON.FeatureCollection {
    return this.features
  }

  initialize(container: any) {
    mapboxgl.accessToken = environment.VITE_MAPBOX_KEY;

    this.map = new mapboxgl.Map({
      container: container.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-70.9, 42.35],
      zoom: 9
    });
  }

  createControls() {
    this.createDraw()
  }

  private createDraw() {
    const draw: MapboxDraw = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        polygon: true,
        trash: true,
        line_string: true,
        point: true,
      }
    });

    this.map.addControl(draw);
 
    this.map.on('draw.create', () => this.updateFeatures(draw));
    this.map.on('draw.delete', () => this.updateFeatures(draw));
    this.map.on('draw.update', () => this.updateFeatures(draw));

  }

  private updateFeatures(draw: MapboxDraw) {
    this.features = draw.getAll()
  }
}
export const mapRef = new Map();
