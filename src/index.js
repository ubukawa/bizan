require('dotenv').config()
import mapboxgl from "mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapboxStyleSwitcherControl } from "mapbox-gl-style-switcher";
import "mapbox-gl-style-switcher/styles.css";
//import MapboxPopupControl from '@watergis/mapbox-gl-popup';
//import '@watergis/mapbox-gl-popup/css/styles.css';
import MapboxLegendControl from "@watergis/mapbox-gl-legend";
import '@watergis/mapbox-gl-legend/css/styles.css';
import { MapboxExportControl}  from "@watergis/mapbox-gl-export";
import '@watergis/mapbox-gl-export/css/styles.css';

(()=>{

var mapgl = process.env.mapgl;
mapgl.accessToken = process.env.ACCESSTOKEN;
const map = new mapgl.Map({
  container: "map",
  style: "std.json",
  center: [134.233884, 34.033731],
  zoom: 8,
  maxZoom: 16
});

map.addControl(new mapgl.NavigationControl(), 'bottom-right');
map.addControl(new mapgl.ScaleControl({
    maxWidth: 200, unit: 'metric'
}) );

let voice = null
for(let v of speechSynthesis.getVoices()) {
  console.log(v.name)
  if ([
    'Daniel',
    'Google UK English Male',
    'Microsoft Libby Online (Natural) - English (United Kingdom)'
  ].includes(v.name)) voice = v
}

//style-switcher
styles: [
    { title: 'Geology', uri:'std.json' },
    { title: 'Photo', uri:'std-photo.json' }
],
MapboxStyleSwitcherControl.DEFAULT_STYLE = styles[0].title;
map.addControl(new MapboxStyleSwitcherControl(styles), 'top-right');

})();
