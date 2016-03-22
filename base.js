var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson"

var map;

$(document).ready(function(){

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.00, lng: -122.},
    zoom: 8
  });

  

  $.ajax({
  	method: 'GET',
  	url: weekly_quakes_endpoint,
  	success: function (taco){
  		taco.features.forEach(function (i){
  		var title = i.properties.title;
  		var lon = i.geometry.coordinates[0];
  		var lat = i.geometry.coordinates[1];
  		var mag = i.properties.mag;
      var time = Math.round( (Date.now() - i.properties.time) / (1000 *60*60) );	
      
       
  		new google.maps.Marker({
    		position: new google.maps.LatLng(lat, lon),
    		map: map,
  		  title: title
      });



  		$('#info').append('<p>' + 'Title: ' + title + ' ' + '<br>' + 'Location: '+ lon + ' by ' + lat + '<br>'+' Magnitude: ' + mag + '<br>' + 'Quake happened ' + time + ' hours ago.' + '</p>');



  		});
  	}
  });
  
  



});

// This is a code snippet that will place a pin at the coordinates lat & lng

