$(document).ready(function(){
  // Declaring map on the global scope so that it is not restricted to the local scope of initMap().
  var map;
  // The variable marker is declared with a null value to correspond to the if/else statement in the function placeMarker().
  var marker;
  // The variable finder is declared in global scope so that once its value is changed by the AJAX function, it can be passed to 
  var finder;

  // Function to create the interactive map and append it to the division with the ID of "map." This function is called by default when the page loads, at the bottom of this script.     
  function initMap() {
    // The location of the center of the continental United States: 39.82925222683178, -98.5790934619165. Adjusted slightly in the value below for better appearance on the page.
    const country = { lat: 38.729, lng: -96.879 };
    // The map, centered on USA.
    map = new google.maps.Map(document.getElementById("map"), {
      zoom: 2,
      center: country
    });

    map.addListener('click', function(event) {
      placeMarker(event.latLng, map);
    });
  // initMap() function closes in the line below, and includes the generation of an event listener on the map. This proved necessary for the map event listener to function properly, or else an error would display that "map" is undefined. 
  }

  function placeMarker(location, map) {
    if (marker == null) {
      marker = new google.maps.Marker({
        position: location,
        map: map,
        animation: google.maps.Animation.DROP
      });
    } else {
      marker.setPosition(location);
    }
    
    var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + marker.getPosition().toUrlValue() + "&result_type=country&key=AIzaSyB7Ma6MevHTXC2RnuetQCcPM7LUnKvyeKA"
    console.log(queryURL);
    
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response){
      finder = response.results[0].formatted_address;
      console.log(finder);
    });
  }

  // The event listener and function below CAN be edited. Currently serves as a placeholder and targets the button in the HTML with the ID of "search-go." Feel free to change this as well.
  $("#search-go").on("click", function(){
    console.log("Search was clicked");
    if (marker != null) {
      console.log(finder);
    } else {
      console.log("No marker present");
    }
  })
  
  initMap();
});

// https://developers.google.com/maps/documentation/javascript/examples/geocoding-simple
// Above link will be useful in making the Map pan to the location specified by the user in the text field. This may also serve as a soft-validation by moving the pin to the typed location, such that the typed location and the pin are not in conflict.