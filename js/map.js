//create var bounds
var northWest = L.latLng(47, -125),
	southEast = L.latLng(25, -70),
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

//Load texas boundary json and style
var texasPoly = L.geoJson(texas, {
    	style: function (feature) {
        return {color: "#ff0000"};
    		}
			});

texasPoly.addTo(map);
//L.polygon(texasPoly, {transform: true}).addTo(map);
