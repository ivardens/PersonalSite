(function () {
  'use strict';

  // Rotation flipper handler
  var flipper = document.querySelector('.flipper');

  document.addEventListener('click', function (ev) {
    var className = ev.target.className;
    var fClassName = flipper.className;
    var fClassList = flipper.classList;
    var tagName = ev.target.tagName;

    if (className === 'login-btn' && fClassName != 'flipper onFlipper') {
      fClassList.add('onFlipper');
    } else {
      tagName === 'BODY' ||
        className === 'login-btn' ||
        className === 'login-block' ||
        className === 'container' ||
        className === 'login-content' ||
        className === 'login-content' ?
        fClassList.remove('onFlipper') : null;
    }
  });

  // Hamburget menu handler 
  $('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });

  // var toggle = document.getElementById('toggle'),
  //     overlay = document.getElementById('overlay');
})();