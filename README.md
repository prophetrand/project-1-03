# Global Pop

## Project-1-03

### Why Make It?

We began to tackle this project at a time when stress was high in our immediate and larger communities.

For this reason, we wanted to build a web app that could bring some joy and optimism to the User.

Music is loved by many and is a cornerstone of culture around the world, so we decided on an app that would help the User find more good stuff to listen to.

Last.fm is an online music service that allows users to track and share their listening history.

Last.fm consolidates their user data to examine broad popularity trends that we can access through their API.

We wanted to harness this data in combination with Google Maps in a practical way we had not seen before.

Feature Break Down:

![Sample Page](https://github.com/prophetrand/project-1-03/blob/main/images/featureReason.png?raw=true)

Here is a visual of this app's interaction:

![Sample Page](https://github.com/prophetrand/project-1-03/blob/main/images/Global_Pop.gif?raw=true)

* [This Site is live on GitHub until 01/15/2021](https://prophetrand.github.io/project-1-03/)
* [See all Rand's repositories HERE](https://github.com/gcvarela21/)
* [See all Gloria Varela's repositories HERE](https://github.com/prophetrand/)
* [If your reading this you are probably HERE](https://github.com/prophetrand/project-1-03/)
​

## **Built With**

* [HTML](https"//w3schools.com)
* [CSS](https"//w3schools.com)
* [JQuery](https://getbootstrap.com/)
* [Google Maps](https://developers.google.com/maps/documentation)
* [Google Geo Location](https://developers.google.com/maps/documentation/geolocation/overview)
* [LastFM API](https://www.last.fm/api)
* [gitBash](https://git-scm.com/downloads)
* [VS Code](https://atom.io/)
* [gitHub](https"//gitHub.com)

_______________________________________________________________________

### **Summary**

write things here

_______________________________________________________________________
​

#### **Code Snippet**

​
lets find some code and put it below

```html
<div id="map"></div><br/>

  <div class="grid-container grid-x"> 
    <div id="place-check"></div>
    <form class="cell">
      <input type="text" id="country" placeholder="Enter a Country name">
    </form>
    <button id="search-go" class="button large">Start Search</button>
    
  </div>
  <br/>
  <h3 id="result-country"></h3>
  <br/>
  
  <div class="grid-container" id="dump-viewer">
  </div>
```

Here is a visual:

![Sample Image](https://github.com/prophetrand/project-1-03/blob/main/images/global_pop_home.png?raw=true)

_______________________________________________________________________

​**Code Snippet**

write things here
​

```javascript

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

```

Here is a visual:

![Sample Image](https://github.com/prophetrand/project-1-03/blob/main/images/map_init.png?raw=true)

_______________________________________________________________________

​**Code Snippet**

you can talk about the snippet here

```javascript
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

```

Here is a visual:

![Sample Image](https://github.com/prophetrand/project-1-03/blob/main/images/map_pin.png?raw=true)

_______________________________________________________________________
​

​**Code Snippet**

you can talk about the snippet here

```javascript
var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + marker.getPosition().toUrlValue() + "&result_type=country&key=AIzaSyB7Ma6MevHTXC2RnuetQCcPM7LUnKvyeKA"
    console.log(queryURL);
    
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response){
      finder = response.results[0].formatted_address;
    });
  }

```

Here is a visual:

![Sample Image](https://github.com/prophetrand/project-1-03/blob/main/images/Geocoding_Response_Example.png?raw=true)

_______________________________________________________________________
​

​**Code Snippet**

you can talk about the snippet here

```javascript
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

```

Here is a visual of a Null call:

![Sample Image](https://github.com/prophetrand/project-1-03/blob/main/images/search_null.png?raw=true)

Here is a visual of the Last FM Json object:

![Sample Image](https://github.com/prophetrand/project-1-03/blob/main/images/console_log_response.png?raw=true)

_______________________________________________________________________

**Code Snippet**

In the script below variables are assigned to the specific information we wanted to pull from the Json object that was requested in our ajx call from the Last FM API.

Those variables are then passed into a div with the id "dump-viewer" found on our index html page using append to create all elements needed to hold the information we wanted displayed. 

This process was interated 5 times to create a top 5 artists and info.

With some research we discovered the Last FM Api is doing some sort of over haul and doesn't provided and actual iamges of the artists but instead has the image of the box with a star referenced in all the objects that provide image urls.

With more time another api could be sourced to resolve this issue and can be looked at in the future.

```javascript
            //// pointers to the thw json data
            var topName1 = response.topartists.artist[0].name;
            var listeners1 = response.topartists.artist[0].listeners;
            var urlFM1 = response.topartists.artist[0].url;
            var img1 = response.topartists.artist[0].image[2]["#text"];

           /// appending a <div> <img /> <a></a> <p></p> <p></p> </di>
           /// with the data from the the api call inside the index.html div with the ID of dump-viewer
            $("#dump-viewer").append(
                "<div class='callout large primary' style= 'margin-left: 20'; 'margin-right: 5vw' ><img src=" + img1 +"/>","<a href='" + urlFM1 + "' target='_blank'>" + 'Check Out the Artist on Last FM!' + "</a>","<p>" + 'Artist Name: ' + topName1 + "</p>","<p>" + 'How Many Listeners: ' + listeners1 + "</p></div>"
                )
       
```

Here is a visual of the appended divs look like:

![Sample Image](https://github.com/prophetrand/project-1-03/blob/main/images/brazil_search.png?raw=true)

_______________________________________________________________________

### **Deployed Link**

* [See Live Site on Git Hub](https://gcvarela21.github.io/password_generator/)
​
​

### **Team Members :**

#### **Rand Hale**

* [Link to Github](https://github.com/prophetrand)
* [Link to LinkedIn](https://www.linkedin.com/in/rand-hale-83ba389b/)

#### **Gloria Varela**

* [Link to Portfolio Site](https://www.glo.digital)
* [Link to Github](https://github.com/gcvarela21)
* [Link to LinkedIn](https://www.linkedin.com/in/glovarela)

_______________________________________________________________________
​

#### **License**

​
This project is licensed under the MIT License