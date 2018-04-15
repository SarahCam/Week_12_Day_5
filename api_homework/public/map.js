const MapWrapper = function(container, coords, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
  this.markers = [];
}

MapWrapper.prototype.addMarker = function (coords, info) {
  const marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap
    // icon: 'https://maps.google.com/mapfiles/kml/shapes/parking_lot_maps.png'
  });

  var infowindow = new google.maps.InfoWindow({
    content: info
  });

  marker.addListener('click', function(){
    infowindow.open(this.googleMap, marker);
  });

  this.markers.push(marker);
  return marker;
};
