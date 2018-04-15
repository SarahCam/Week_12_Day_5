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
    map: this.googleMap,
    icon: "http://www.codeshare.co.uk/images/blue-pin.png", //if you comment this out or delete it you will get the default pin icon.
    animation:google.maps.Animation.DROP
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
