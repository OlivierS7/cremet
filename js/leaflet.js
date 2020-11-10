let mymap = L.map('mapId').setView([47.2124977, -1.7549253, 21], 10);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(mymap);
let marker = L.marker([47.2124977, -1.7549253, 21]).addTo(mymap).bindPopup('Cremet Philippe');
let circle = L.circle([47.2124977, -1.7549253, 21], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.15,
    radius: 22000
}).addTo(mymap).bindPopup('Rayon pour la livraison');