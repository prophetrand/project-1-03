// Application name:	Top Tracks Geography
// API key:	      6b9c504e4c3ebdbd387620fe00865255
// Shared secret: 387c82747a3b71501f12df7c8b38aa4d
// Registered to: gcvarela21

var apiKey = '6b9c504e4c3ebdbd387620fe00865255';
var url ='http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=6b9c504e4c3ebdbd387620fe00865255';

console.log("your js file is active");

function test() {
			
		console.log('test function has started');	
		// Within $.ajax{...} is where we fill out our query 
		$.ajax({
			url: url,

			// Here is where we handle the response we got back from Last FM
			success: function(response) {
				console.log('Oh Sh!t there is a response! Look Down There:');
				console.log(response);
				 
			}
		});
	
    }

//  the test fucntion starts because I called it
test();