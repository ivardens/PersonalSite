// (function () {
  'use strict';

  // import Flipper from './flipper';
  // import Blog from './blog';
  // import Hamburger from './hamburger';
  
  var hamburger = require('./hamburger');
  var flipp = require('./flipper');
  var blog = require('./blog');

  // import initMap from './googleMap';
  // initMap();

  blog();

  document.addEventListener('click', function (ev) {
    flipp(ev);
    hamburger(ev);


    // Flipper();
    // Hamburger();

  }, true);

// });