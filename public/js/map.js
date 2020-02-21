let map = null;

function initMap() {
    navigator.geolocation.getCurrentPosition(function(pos){
        location.lat = pos.coords.latitude;
        location.long = pos.coords.longitude;
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: location.lat, lng: location.long},
    zoom: 11
  });
  getDispensaries(location);
    });
}
function getDispensaries() {
    var riverside = new google.maps.LatLng(location.lat,location.long);
    var request = {
        location: riverside,
        radius: '2000',
        query: ['marijuana']

    };
    service = new google.maps.places.PlacesService(map);
    service.textSearch(request, callback);
}

function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK){
        for (var i = 0; i < results.length; i++) {
            console.log(results)
            var place = results[i];
          let content = `<b>${place.name}</b>
          <p>${place.formatted_address}</p>`
           

            var marker = new google.maps.Marker({
                position: place.geometry.location,
                map: map,
                title: place.name
            });

            var infowindow= new google.maps.InfoWindow({
                content: content
            });

            bindInfoWindow(marker, map, infowindow, content);
            marker.setMap(map);
        }
    }
}

function bindInfoWindow(marker, map, infowindow, html) {
    marker.addListener('click', function(){

        infowindow.setContent(html);
        infowindow.open(map, this);

    });
    
}
