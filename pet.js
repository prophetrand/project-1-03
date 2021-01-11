//  curl -d "grant_type=client_credentials&client_id=Mgg4WMPfVlQ3agk9NfhDYWrCnpec7X5oi3WCl0Ep7e8ZcwN4yu&client_secret=3tdXXXmyQYI9772pMdffjsob5ugBT1mOCWXNSHI1" https://api.petfinder.com/v2/oauth2/token
//  api key =  Mgg4WMPfVlQ3agk9NfhDYWrCnpec7X5oi3WCl0Ep7e8ZcwN4yu
//  api token? = eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJNZ2c0V01QZlZsUTNhZ2s5TmZoRFlXckNucGVjN1g1b2kzV0NsMEVwN2U4WmN3TjR5dSIsImp0aSI6ImQ5ZGIyYmFmMWM1YzkwMWNiNjE1ZWE3NmUwY2ViZDdhYjA3ZDhiNThlMDE3YzY4ZDYzM2Q2ZWI2MGIwODIyN2QyZTkxNWVhMjZlYmZmOTIxIiwiaWF0IjoxNjEwMjczNTM1LCJuYmYiOjE2MTAyNzM1MzUsImV4cCI6MTYxMDI3NzEzNSwic3ViIjoiIiwic2NvcGVzIjpbXX0.jMnDvo2jlAE0qiAAowtgVA8JFb6RQspZyKWQpN1aIo84wGmFy2oV4MaxrA6mTv9CdXh3hTpLjjUSiGBTkHCZzQzkbsHn8_L24QZpIPBzRPEzBNt25nHlZHKisHvLWJcLUVT4Cm6m9VKxulSB3gHk6EJwbU5YlSN4EkBzGVh3MiaAOeaD2n2PbbefsHANNebItK7FE9LDcGCHbcrq2KY8DFP1ReTbK3y0DAUb-jag7XsoApcq8MDcqL7w7Mu5OykPkFRLaDFaSsfx-ZqW1bWuA9U7ORy0DRUrCLMGPVYqLYThVVxxCMK8YKsTupNppC5Jdz7xnG-myi6W4HIsfk64ug
//  'http://api.petfinder.com/pet.getRandom?key=' + apiKey + '&animal=cat&location=' + zip + '&output=basic&format=json&callback=?'
console.log("your js file is active");

var apiKey = 'Mgg4WMPfVlQ3agk9NfhDYWrCnpec7X5oi3WCl0Ep7e8ZcwN4yu';


document.addEventListener('DOMContentLoaded', test);

function test() {
	document.getElementById('submitZip').addEventListener('click', function(event){
		event.preventDefault();
		var zip = document.getElementById('zip').value; // this line gets the zip code from the form entry
		var url ='http://api.petfinder.com/pet.getRandom';
		
		console.log('AJAX is next but wont work...');	
		// Within $.ajax{...} is where we fill out our query 
		$.ajax({
			url: url,
			//jsonp: "callback",
			//dataType: "jsonp",
			data: {
				key: apiKey,
				animal: 'dog',
				//city: zip,
				output: 'basic',
				format: 'json'
			},
			// Here is where we handle the response we got back from Petfinder
			success: function(response) {
				console.log(response);
				console.log("where in the world is my response?"); 
			}
		});
	})
	}
