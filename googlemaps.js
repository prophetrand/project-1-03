$(document).ready(function(){
  // Declaring map on the global scope so that it is not restricted to the local scope of initMap().
  var map;
  var marker;
  var markerCoord;

  // Function to create the interactive map and append it to the division with the ID of "map." This function is called by default when the page loads, at the bottom of this script.     
  function initMap() {
    // The location of the center of the continental United States: 39.82925222683178, -98.5790934619165. Adjusted slightly in the value below for better appearance on the page.
    const country = { lat: 38.729, lng: -96.879 };
    // The map, centered on USA.
    map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4.1,
      center: country,
      restriction: {
        latLngBounds: {
          east: -66.9513812,
          north: 49.3457868,
          south: 24.7433195,
          west: -124.7844079
        },
        strictBounds: false
      }
      // The restriction key above limits the map's viewport to the given coordinates, which equal an area slightly larger than the continental United States. The user will be unable to pan the map or zoom out beyond the given bounds, but the user can still zoom in and pan the map inside those coordinates.
    });

    map.addListener('click', function(event) {
      placeMarker(event.latLng, map);
    });
  // initMap() function closes in the line below, and includes the generation of an event listener on the map. This proved necessary for the map event listener to function properly, or else an error would display that "map" is undefined. 
  }

  function placeMarker(location, map) {
    console.log("Fire!");
    if (marker == null) {
      marker = new google.maps.Marker({
        position: location,
        map: map,
        animation: google.maps.Animation.DROP
      });
    } else {
      marker.setPosition(location);
    }
    console.log(marker.getPosition());
    // set variable markerCoord equal to the coordinates of the marker here. Can also run reverse Geocoding AJAX request here most likely.
  }

  $("#search-go").on("click", function(){
    console.log("Search was clicked");
    if (marker != null) {
      console.log(marker.getPosition());
    } else {
      console.log("No marker present");
    }
  })
  
  initMap();
});

// https://developers.google.com/maps/documentation/javascript/examples/geocoding-simple
// Above link will be useful in making the Map pan to the location specified by the user in the text field. This may also serve as a soft-validation by moving the pin to the typed location, such that the typed location and the pin are not in conflict.

// https://stackoverflow.com/questions/15792655/add-marker-to-google-map-on-click
// This one is for placing a pin at the clicked location's lat/lon
// https://developers.google.com/maps/documentation/javascript/events#maps_event_simple-javascript
// documentation in Google Maps API regarding this stuff. Look into Events and the Marker class for solutions.
// https://medium.com/@letian1997/click-javascript-google-map-add-draggable-markers-polyline-b834dd5762b2
// hope this saves me