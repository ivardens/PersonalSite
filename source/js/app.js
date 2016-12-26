
  'use strict';
  
  //import method
  import flipp from './flipper_es6';
  import blog from './blog_es6';
  import hamburger from './hamburger_es6';
  import slider from './slider';
  
  //require method
  // var hamburger = require('./hamburger');
  // var flipp = require('./flipper');
  // var blog = require('./blog');

  // import initMap from './googleMap';
  // initMap()();

  blog();
  // slider();

  document.addEventListener('click', function (ev) {
    flipp(ev);
    hamburger(ev);

  }, true);

