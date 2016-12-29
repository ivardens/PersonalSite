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

// 'use strict';
// //require method
// // var hamburger = require('./hamburger');
// // var flipp = require('./flipper');
// // var blog = require('./blog');

// //import method
// import flipp from './flipper_es6';
// import blog from './blog_es6';
// import hamburger from './hamburger_es6';
// import slider from './slider';
// import initMap from './googleMap';

// if (window.location.pathname == '/about.html') {
//   google.maps.event.addDomListener(window, 'load', initMap());
// }

// if (window.location.pathname == '/blog.html') {
//   blog();
// }

// // slider();

// document.addEventListener('click', function (ev) {
//   flipp(ev);
//   hamburger(ev);
// }, true);


//- script.
//-   function initMap() {
//-   var uluru = {lat: 49.230645, lng: -123.010367};
//-   var map = new google.maps.Map(document.getElementById('map'), {
//-   zoom: 11,
//-   scrollwheel: false,
//-   draggable: false,
//-   center: uluru
//-   });
//-   var marker = new google.maps.Marker({
//-   position: uluru,
//-   map: map
//-   });
//-   }

//- script(src="https://maps.googleapis.com/maps/api/js?callback=initMap&key=AIzaSyAw0UoLZKCR6RXLa22GntsEQJEq2VYi-Qk" defer)