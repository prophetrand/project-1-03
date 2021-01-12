// Application name:	Top Tracks Geography
// API key:	      6b9c504e4c3ebdbd387620fe00865255
// Shared secret: 387c82747a3b71501f12df7c8b38aa4d
// Registered to: gcvarela21

var apiKey = '6b9c504e4c3ebdbd387620fe00865255';
//var url ='http://ws.audioscrobbler.com/2.0/?method=geo.getTopAlbums';
var url ='http://ws.audioscrobbler.com/2.0/?method=geo.getTopartists';

console.log("your js file is active");

// document.addEventListener('DOMContentLoaded', test);
// when using AJax use JQuery calls for all ativity in your js file
// $(document).ready wait means that all the HTML needs to load before doing anything
$(document).ready(function(){
// below is an event listener for the ID of "submitCountry" for an on click event 
// it defines some pointers and starts the ajax call
	 $('#submitCountry').on('click', function(event){
		event.preventDefault();
		var country = $('#country').val().trim(); // this line gets the Country name from the form entry... it will use the global variable defined by Rand	
		console.log('test function has started');	//// testing to see if function was ran
		console.log(country); ///verifying that the variable for country pointer caputures the user input
		// Within $.ajax{... is where we fill out our query  ...} 
		$.ajax({
			// sample of what i want to string togeter:
			// the url contains the last FM adress wit the method of geo.topartists
			// using srings to concatinate the rest of the search parameters, api key, and formsting to json data retrieval
			url: url + '&country=' + country + '&api_key=' + apiKey + '&limit=10&format=json',

			// Here is where we handle the response we got back from Last FM
			success: function(response) {
				// log to see if the function is running
				console.log('Oh Sh!t there is a response! Look Down There:');
				// dispaly all the info from the object retrieved fromt the call
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
				//// pointers to the top 5 artist provied images
				var img1 = response.topartists.artist[0].image[4]["#text"];
				var img2 = response.topartists.artist[1].image[4]["#text"];
				var img3 = response.topartists.artist[2].image[4]["#text"];
				var img4 = response.topartists.artist[3].image[4]["#text"];
				var img5 = response.topartists.artist[4].image[4]["#text"];

				// verifing that the information is retrieved correctly
				console.log(topName1);
				

				/// appending a <div> <img /> <a></a> <p></p> <p></p> </di>
				// with the data from the the api call
				$("#dump-viewer").append(
				"<div class='callout' style= 'margin-left: 20'; 'margin-right: 5vw' ><img src=" + img1 +"/>","<a href='" + urlFM1 + "' target='_blank'>" + 'Check Out the Artist on Last FM!' + "</a>","<p>" + 'Artist Name: ' + topName1 + "</p>","<p>" + 'How Many Listeners: ' + listeners1 + "</p></div>","<div class='callout' style= 'margin-left: 20'; 'margin-right: 5vw' ><img src=" + img2 +"/>","<a href='" + urlFM2 + "' target='_blank'>" + 'Check Out the Artist on Last FM!' + "</a>","<p>" + 'Artist Name: ' + topName2 + "</p>","<p>" + 'How Many Listeners: ' + listeners2 + "</p></div>","<div class='callout' style= 'margin-left: 20'; 'margin-right: 5vw' ><img src=" + img3 +"/>","<a href='" + urlFM3 + "' target='_blank'>" + 'Check Out the Artist on Last FM!' + "</a>","<p>" + 'Artist Name: ' + topName3 + "</p>","<p>" + 'How Many Listeners: ' + listeners3 + "</p></div>","<div class='callout' style= 'margin-left: 20'; 'margin-right: 5vw' ><img src=" + img4 +"/>","<a href='" + urlFM4 + "' target='_blank'>" + 'Check Out the Artist on Last FM!' + "</a>","<p>" + 'Artist Name: ' + topName4 + "</p>","<p>" + 'How Many Listeners: ' + listeners4 + "</p></div>", "<div class='callout' style= 'margin-left: 20'; 'margin-right: 5vw' ><img src=" + img5 +"/>","<a href='" + urlFM5 + "' target='_blank'>" + 'Check Out the Artist on Last FM!' + "</a>","<p>" + 'Artist Name: ' + topName5 + "</p>","<p>" + 'How Many Listeners: ' + listeners5 + "</p></div>"
				)
			}
		    });
	
	});

});