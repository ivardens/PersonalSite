export default () => (
  function() {
    console.log('1111111111222223333');
    var uluru = {
      lat: 49.230645,
      lng: -123.010367
    };
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 11,
      scrollwheel: false,
      draggable: false,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }()
)


// export default () => (
//   if (document.getElementById('#map')) {
//     function initMap() {
//       var uluru = {
//         lat: 49.230645,
//         lng: -123.010367
//       };
//       var map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 11,
//         scrollwheel: false,
//         draggable: false,
//         center: uluru
//       });
//       var marker = new google.maps.Marker({
//         position: uluru,
//         map: map
//       });
//     }
//   }
// )