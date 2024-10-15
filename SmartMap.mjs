var map = L.map('map').setView([  46.971264, -1.299803], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


var marker = L.marker([  46.971264, -1.299803]).addTo(map);

function toggleInformation() {
	var elt = document.getElementById('sousmenu-info');
	console.log('test', elt.style.display);
	if (elt.style.display == 'none') {
	  elt.style.display = 'block';
	} else {		
	  elt.style.display = 'none';
	}
	
}

/*latitude, longévitude, usager*/


/*
var circle = L.circle([ 46.971264, -1.299803], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 1000
}).addTo(map);

var polygon = L.polygon([
    [ 47.01667, -0.9],
    [ 47.01667, -0.3],
    [ 47.1667, -1.2],
]).addTo(map);


for(let i = 0; i < 1063; i++) {
	let station = stations[i];
	console.log(station);
	console.log(station.libelle);
	console.log(station.latitude);
	console.log(station.longitude);
	var marker = L.marker([ station.latitude , station.longitude]).addTo(map);
}
*/
