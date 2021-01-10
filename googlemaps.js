// My GoogleMaps API Key: AIzaSyB7Ma6MevHTXC2RnuetQCcPM7LUnKvyeKA

// Declaring map on the global scope so that it is not restricted to the local scope of initMap().
var map;
var marker;

$(document).ready(function(){
  
  // Function to create the interactive map and append it to the division with the ID of "map." This function is called by default when the page loads, at the bottom of this script.     
  function initMap() {
    // The location of the continental United States, 39.82925222683178, -98.5790934619165
    const country = { lat: 38.729, lng: -96.879 };
    // The map, centered on USA.
    map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4.1,
      center: country,
    });
    // The marker, positioned at central USA.
    // const marker = new google.maps.Marker({
    // position: country,
    // map: map,
    // });
  

  // Although "click," "mouseup," and "mousedown" resemble standard DOM events, in this case they are part of the Google Maps Javascript API. The API provides these mechanisms to support cross-browser  
  $("#map").on('mousedown', function (event) {
    $("#map").on('mouseup mousemove', function newMark(event) {
      if (event.type === 'mouseup') {
        console.log("Ah yes");
        // here is the tricky bit
        placeMarker(event.LatLng, map);
      } else {
        // When the map is dragged but not explicitly clicked at one location, nothing happens with respect to this event listener.
      }
      $("#map").off('mouseup mousemove', newMark);
    });
  });

  // map.addListener('click', function(event) {
  //   placeMarker(event.latLng, map);
  // });

  function placeMarker(position, map) {
    const marker = new google.maps.Marker({
        position: position,
        map: map
    });
    // map.panTo(position);
  }
}
  initMap();
});

// https://developers.google.com/maps/documentation/javascript/examples/geocoding-simple
// Above link will be useful in making the Map pan to the location specified by the user in the text field. This may also serve as a soft-validation by moving the pin to the typed location, such that the typed location and the pin are not in conflict.

// https://forums.asp.net/t/1942206.aspx?how+to+restrict+the+map+to+a+country+using+google+api+ 
// Try to use one of the solutions above to restrict the map bounds to the continental United States.

// https://stackoverflow.com/questions/15792655/add-marker-to-google-map-on-click
// This one is for placing a pin at the clicked location's lat/lon
// https://developers.google.com/maps/documentation/javascript/events#maps_event_simple-javascript
// documentation in Google Maps API regarding this stuff. Look into Events and the Marker class for solutions.