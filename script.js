function initMap() {
var position = {};
  for(i = 0; i<4; i++){
    switch (i) {
    case 0:
      position = {lat: 43.666070, lng: -79.405681};
      var map = new google.maps.Map(document.getElementById('tuesdayMap'), {
        zoom: 16,
        center: position
      });
      break;
    case 1:
      position = {lat: 43.828352, lng: -79.308696};
      var map = new google.maps.Map(document.getElementById('wednesdayMap'), {
        zoom: 16,
        center: position
      });
      break;
    case 2:
      position = {lat: 43.677141, lng: -79.352213};
      var map = new google.maps.Map(document.getElementById('thursdayMap'), {
        zoom: 16,
        center: position
      });
      break;
    case 3:
      position = {lat: 43.666442, lng: -79.404643};
      var map = new google.maps.Map(document.getElementById('fridayMap'), {
        zoom: 16,
        center: position
      });
      break;
    default:
      alert("Error. This shouldn't happen!");
    }
    var marker = new google.maps.Marker({
      position: position,
      map: map
    });
  }
}
