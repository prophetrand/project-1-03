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

  initMap();

//   $("#map").on("click", function(event){
//     console.log("Oh joy");
//   });

  $("#map").on('mousedown', function (event) {
    $("#map").on('mouseup mousemove', function handler(event) {
      if (event.type === 'mouseup') {
        console.log("Oh Joy");
      } else {
        // drag
      }
      $("#map").off('mouseup mousemove', handler);
    });
  });
});