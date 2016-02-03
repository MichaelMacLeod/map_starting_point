var initialize = function(){
  var centre = {lat: 40.712784, lng: -74.005941};
  var CodeClan = {lat: 55.946803, lng: -3.201632};
  var zoomLevel = 12;
  var map = new Map(centre, zoomLevel);
  // var image: "";
  // map.addMarker(centre, "");
  // map.addMarker(CodeClan, "");
  map.bindClick();
  // var locator = new GeoLocator(map);
  // locator.setMapCentre();

  map.addInfoWindow(centre, "<h1>HELLOOOOO?</h1>");
}

window.onload = initialize;










