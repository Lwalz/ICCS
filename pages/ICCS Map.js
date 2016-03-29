// The following example creates a marker in Stockholm, Sweden using a DROP
// animation. Clicking on the marker will toggle the animation between a BOUNCE
// animation and no animation.

var marker;
var count = 0;

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 5,
    center: {
      lat: 41.89,
      lng: 12.5
    },
    draggable: false,
  });

  marker1 = new google.maps.Marker({
    map: map,
    draggable: false,
    position: {
      lat: 41.89,
      lng: 12.5
    },
    zoom: 10,

  });

  marker2 = new google.maps.Marker({
    map: map,
    draggable: false,
    position: {
      lat: 40.75,
      lng: 14.783
    },
    zoom: 10,

  });

  marker3 = new google.maps.Marker({
    map: map,
    draggable: false,
    position: {
      lat: 37.59,
      lng: 14.152
    },
    zoom: 10,

  });

  map.addListener('click', function() {
    map.setCenter({
      lat: 41.89,
      lng: 12.5
    });
    map.setZoom(5);
  });
  var rome = marker1;
  rome.addListener('click', function() {
    map.panTo({
      lat: 41.89,
      lng: 12.5
    });
    map.setZoom(8);
  });

  var campagnia = marker2;
  campagnia.addListener('click', function() {
    map.panTo({
      lat: 40.75,
      lng: 14.783
    });
    map.setZoom(8);
  });

  var sicily = marker3;
  sicily.addListener('click', function() {
    map.panTo({
      lat: 37.59,
      lng: 14.152
    });
    map.setZoom(8);
  });



};
