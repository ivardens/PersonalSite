'use strict';

//import modules
import flipp from './flipper_es6';
import blog from './blog_es6';
import hamburger from './hamburger_es6';
// import slider from './slider';
import initMap from './googleMap';
import skills from './skills';

// Google Map and skills handler
if (window.location.pathname == '/about.html') {
  google.maps.event.addDomListener(window, 'load', initMap());
  skills();
}

if (window.location.pathname == '/blog.html') {
  blog();
}

// slider();

document.addEventListener('click', function (ev) {
  flipp(ev);
  hamburger(ev);
}, true);