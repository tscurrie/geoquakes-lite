var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson"

var map;

$(document).ready(function(){

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });

})

// This is a code snippet that will place a pin at the coordinates lat & lng
/*
new google.maps.Marker({
  position: new google.maps.LatLng(lat,lng),
  map: map,
  title: title
});
*/
