import { MapboxStyleSwitcherControl } from "mapbox-gl-style-switcher";
import mapboxgl from "mapbox-gl";
import "mapbox-gl-style-switcher/styles.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoidC11YnVrYXdhIiwiYSI6ImNrb3NuemYxeDAwazQybm55YXUwZ281MmkifQ.MDqjOP45DIUcpLSCI9JAGg";
const map = new mapboxgl.Map({
  container: "map",
  style: "https://ubukawa.github.io/bizan/std.json",
  center: [134.233884, 34.033731],
  zoom: 8
});
map.addControl(new MapboxStyleSwitcherControl());



