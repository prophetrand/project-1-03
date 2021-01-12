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
    });
  }

  // The event listener and function below CAN be edited. Currently serves as a placeholder and targets the button in the HTML with the ID of "search-go." Feel free to change this as well.
  $("#search-go").on("click", function(){
    if (marker != null) {
      $("#result-country").text("Results for: " + finder);
      $("#dump-viewer").empty();
      $("#place-check").empty();
      $.ajax({
        url: 'https://ws.audioscrobbler.com/2.0/?method=geo.getTopartists&country=' + finder + '&api_key=6b9c504e4c3ebdbd387620fe00865255&limit=10&format=json',
  
        // Here is where we handle the response we got back from Last FM
        success: function(response) {
          // display all the info from the object retrieved fromt the call
          console.log(response);
          //// pointers to the top 5 artist names
          var topName1 = response.topartists.artist[0].name;
          var topName2 = response.topartists.artist[1].name;
          var topName3 = response.topartists.artist[2].name;
          var topName4 = response.topartists.artist[3].name;
          var topName5 = response.topartists.artist[4].name;
          //// pointers to the top 5 artist listeners count
          var listeners1 = response.topartists.artist[0].listeners;
          var listeners2 = response.topartists.artist[1].listeners;
          var listeners3 = response.topartists.artist[2].listeners;
          var listeners4 = response.topartists.artist[3].listeners;
          var listeners5 = response.topartists.artist[4].listeners;
          //// pointers to the top 5 artist links to the lastfm web site
          var urlFM1 = response.topartists.artist[0].url;
          var urlFM2 = response.topartists.artist[1].url;
          var urlFM3 = response.topartists.artist[2].url;
          var urlFM4 = response.topartists.artist[3].url;
          var urlFM5 = response.topartists.artist[4].url;
          //// pointers to the top 5 artist provided images
          var img1 = response.topartists.artist[0].image[2]["#text"];
          var img2 = response.topartists.artist[1].image[2]["#text"];
          var img3 = response.topartists.artist[2].image[2]["#text"];
          var img4 = response.topartists.artist[3].image[2]["#text"];
          var img5 = response.topartists.artist[4].image[2]["#text"];
  
          // verifing that the information is retrieved correctly
          console.log(topName1);
          
          /// appending a <div> <img /> <a></a> <p></p> <p></p> </div>
          // with the data from the the api call
          $("#dump-viewer").append(
          "<div class='callout large primary' style= 'margin-left: 20'; 'margin-right: 5vw' ><img src=" + img1 +"/>","<a href='" + urlFM1 + "' target='_blank'>" + 'Check Out the Artist on Last FM!' + "</a>","<p>" + 'Artist Name: ' + topName1 + "</p>","<p>" + 'How Many Listeners: ' + listeners1 + "</p></div>","<div class='callout large primary' style= 'margin-left: 20'; 'margin-right: 5vw' ><img src=" + img2 +"/>","<a href='" + urlFM2 + "' target='_blank'>" + 'Check Out the Artist on Last FM!' + "</a>","<p>" + 'Artist Name: ' + topName2 + "</p>","<p>" + 'How Many Listeners: ' + listeners2 + "</p></div>","<div class='callout large primary' style= 'margin-left: 20'; 'margin-right: 5vw' ><img src=" + img3 +"/>","<a href='" + urlFM3 + "' target='_blank'>" + 'Check Out the Artist on Last FM!' + "</a>","<p>" + 'Artist Name: ' + topName3 + "</p>","<p>" + 'How Many Listeners: ' + listeners3 + "</p></div>","<div class='callout large primary' style= 'margin-left: 20'; 'margin-right: 5vw' ><img src=" + img4 +"/>","<a href='" + urlFM4 + "' target='_blank'>" + 'Check Out the Artist on Last FM!' + "</a>","<p>" + 'Artist Name: ' + topName4 + "</p>","<p>" + 'How Many Listeners: ' + listeners4 + "</p></div>", "<div class='callout large primary' style= 'margin-left: 20'; 'margin-right: 5vw' ><img src=" + img5 +"/>","<a href='" + urlFM5 + "' target='_blank'>" + 'Check Out the Artist on Last FM!' + "</a>","<p>" + 'Artist Name: ' + topName5 + "</p>","<p>" + 'How Many Listeners: ' + listeners5 + "</p></div>"
          )
        }
      });

    } else {
      // Append text to page that says a location has to be chosen.
      $("#place-check").text("Please choose a country on the map or in the search box.");
    }
  })
  
  initMap();
});

// https://developers.google.com/maps/documentation/javascript/examples/geocoding-simple
// Above link will be useful in making the Map pan to the location specified by the user in the text field. This may also serve as a soft-validation by moving the pin to the typed location, such that the typed location and the pin are not in conflict.