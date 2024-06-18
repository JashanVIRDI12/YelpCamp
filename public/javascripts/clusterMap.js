var map = L.map("map").setView([22.5937, 78.9629], 2);

L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png")
    .addTo(map);

var markers = L.markerClusterGroup();

for (var i = 0; i < campgrounds.length; i++) {
    var [longitude, latitude] = campgrounds[i].geometry.coordinates;
    var title = campgrounds[i].properties.popUpMarkup;
    var marker = L.marker(new L.LatLng(latitude, longitude), {
        title: title,
    });
    marker.bindPopup(title);
    markers.addLayer(marker);
}

map.addLayer(markers);
