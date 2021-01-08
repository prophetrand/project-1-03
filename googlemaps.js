// My GoogleMaps API Key: AIzaSyB7Ma6MevHTXC2RnuetQCcPM7LUnKvyeKA

// Initialize and add the map
    
function initMap() {
    // The location of the continental United States, 39.82925222683178, -98.5790934619165
    const country = { lat: 39.829, lng: -98.579 };
    // The map, centered on USA.
    const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: country,
    });
    // The marker, positioned at central USA.
    const marker = new google.maps.Marker({
    position: country,
    map: map,
    });
}

initMap();