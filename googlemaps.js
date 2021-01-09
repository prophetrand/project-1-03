// My GoogleMaps API Key: AIzaSyB7Ma6MevHTXC2RnuetQCcPM7LUnKvyeKA

$(document).ready(function(){
// Function to create the interactive map and append it to the division with the ID of "map." This function is called by default when the page loads, at the bottom of this script.   
  function initMap() {
    // The location of the continental United States, 39.82925222683178, -98.5790934619165
    const country = { lat: 38.729, lng: -96.879 };
    // The map, centered on USA.
    const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4.1,
    center: country,
    });
    // The marker, positioned at central USA.
    // const marker = new google.maps.Marker({
    // position: country,
    // map: map,
    // });
  }

  $("#map").on('mousedown', function (event) {
    $("#map").on('mouseup mousemove', function handler(event) {
      if (event.type === 'mouseup') {
        console.log("Oh Joy");
        const marker = new google.maps.Marker({
            position: event.latLng, 
            map: map
        });
      } else {
        // drag
      }
      $("#map").off('mouseup mousemove', handler);
    });
  });

  initMap();
});

// https://developers.google.com/maps/documentation/javascript/examples/geocoding-simple
// Above link will be useful in making the Map pan to the location specified by the user in the text field. This may also serve as a soft-validation by moving the pin to the typed location, such that the typed location and the pin are not in conflict.

// https://forums.asp.net/t/1942206.aspx?how+to+restrict+the+map+to+a+country+using+google+api+ 
// Try to use one of the solutions above to restrict the map bounds to the continental United States.

// https://stackoverflow.com/questions/15792655/add-marker-to-google-map-on-click
// This one is for placing a pin at the clicked location's lat/lon