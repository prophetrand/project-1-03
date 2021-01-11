// Application name:	Top Tracks Geography
// API key:	      6b9c504e4c3ebdbd387620fe00865255
// Shared secret: 387c82747a3b71501f12df7c8b38aa4d
// Registered to: gcvarela21

var apiKey = '6b9c504e4c3ebdbd387620fe00865255';
var url ='http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists';

console.log("your js file is active");

document.addEventListener('DOMContentLoaded', test);

function test() {
	document.getElementById('submitCountry').addEventListener('click', function(event){
		event.preventDefault();
		var country = document.getElementById('country').value; // this line gets the Country name from the form entry	
		console.log('test function has started');	//// testign to see if function was ran
		console.log(country);
		// Within $.ajax{...} is where we fill out our query 
		$.ajax({
			// ?method=geo.gettopartists&country=spain&api_key=YOUR_API_KEY&format=json
			url: url + '&country=' + country + '&api_key=' + apiKey + '&limit=10&format=json',


			// Here is where we handle the response we got back from Last FM
			success: function(response) {
				console.log('Oh Sh!t there is a response! Look Down There:');
				
				//console.log(response);
				//$("#dump-viewer").append(JSON.stringify(response.topartists.artist[0].name));
				var topName1 = response.topartists.artist[0].name;
				var topName2 = response.topartists.artist[1].name;
				var topName3 = response.topartists.artist[2].name;
				var topName4 = response.topartists.artist[3].name;
				var topName5 = response.topartists.artist[4].name;
				var topName6 = response.topartists.artist[5].name;
				var topName7 = response.topartists.artist[6].name;
				var topName8 = response.topartists.artist[7].name;
				var topName9 = response.topartists.artist[8].name;
				var topName10 = response.topartists.artist[9].name;
				console.log(topName1);
			}
			
		});
	
	});

}

//  the test fucntion starts because I called it
//test();
