// Hamburget menu jQuery handler 
// $('#toggle').click(function () {
//   $(this).toggleClass('active');
//   $('#overlay').toggleClass('open');
// });



// Titles click JS handler in blog
// var blog_title = ev.target.parentNode.classList.contains('blog-titles__item');
// if (blog_title) {
//   var blog_title_active = ev.target.parentNode.classList.contains('blog-titles__active');
//   if (blog_title && blog_title_active) {
//     return null;
//   } else {
//     document.getElementsByClassName('blog-titles__active')[0].
//     classList.remove('blog-titles__active');
//     ev.target.parentNode.classList.add('blog-titles__active');
//   }
// }

// function initMap() {
//     var map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 12,
//         draggable: false,
//         center: {
//             lat: 49.230645,
//             lng: -123.010367
//         }
//     });
//     var marker = new google.maps.Marker({
//         map: map,
//         // Define the place with a location, and a query string.
//         place: {
//             location: {
//                 lat: 49.230645,
//                 lng: -123.010367
//             },
//             query: 'Me, Burnaby, Canada'
//         },
//         // Attributions help users find your site again.
//         attribution: {
//             source: 'Google Maps JavaScript API',
//             webUrl: 'https://developers.google.com/maps/'
//         }
//     });
//     // Construct a new InfoWindow.
//     var infoWindow = new google.maps.InfoWindow({
//         content: 'My home in Burnaby'
//     });
//     // Opens the InfoWindow when marker is clicked.
//     marker.addListener('click', function () {
//         infoWindow.open(map, marker);
//     });
// }