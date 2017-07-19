//create var bounds
var northWest = L.latLng(48, -118),
	southEast = L.latLng(25, -79),
	bounds = L.latLngBounds(northWest, southEast);

//create map and use stamen terrain base
var layer = new L.StamenTileLayer("terrain");
var map = new L.Map("map");

map.addLayer(layer);
map.fitBounds(bounds);

//custom easy button control, zoom to var bounds
L.easyButton('fa-globe fa-lg', function(){
  map.fitBounds(bounds)
}).addTo(map);

//control for legend text
/*
L.Control('topright', {
	return '<p>Drag Texas around the world to compare<br>its size to other states and/or countries!</p>';
}).addTo(map);
*/

//test polygon
var polygon = new L.Polygon(txCoords, {draggable: true}).addTo(map);
