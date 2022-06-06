const mapgl = maplibregl
var map = new mapgl.Map({
  container: 'map', 
  hash: true, 
  style: 'https://ubukawa.github.io/bizan/std.json', // style file path
  center: [134.233884, 34.033731], // center [lng, lat]
  zoom: 8, // zoom level at loading
  pitch: 52,
  maxZoom: 4, // min zoom
  maxZoom: 16, // max zoom
  maxPitch: 85
});


//UI
map.addControl(new mapgl.NavigationControl(), 'bottom-right');
map.addControl(new mapgl.ScaleControl() );
map.addControl(new mapgl.TerrainControl({
  source: "terrainSource",
  exaggeration: 1
}) );

//debug
map.showTileBoundaries = true;
map.showCollisionBoxes = false;