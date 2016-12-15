(function () {
  'use strict';

  document.addEventListener('click', function (ev) {

    // Hamburget menu handler 
      // console.log(ev.target.childNodes);
    if (ev.target.parentNode.id === 'toggle') {
      var toggle = document.getElementById('toggle');
      var overlay = document.getElementById('overlay');

      if (ev.target.parentNode.id === toggle.id &&
        toggle.classList.contains('active')) {
        toggle.classList.remove('active');
        overlay.classList.remove('open');
      } else {
        toggle.classList.add('active');
        overlay.classList.add('open');
      }
    }
    
    // Toggle a titles in blog
    var blog_title = ev.target.parentNode.classList.contains('blog-titles__item');
    if (blog_title) {
      var blog_title_active = ev.target.parentNode.classList.contains('blog-titles__active');
      if (blog_title && blog_title_active) {
        return null;
      } else {
        document.getElementsByClassName('blog-titles__active')[0].
          classList.remove('blog-titles__active');
        ev.target.parentNode.classList.add('blog-titles__active');
      }
    }
    
    // Rotation flipper handler
    var flipper = document.querySelector('.flipper');
    if (flipper) {
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
    }


  });

  // Hamburget menu handler 
  // $('#toggle').click(function() {
  //  $(this).toggleClass('active');
  //  $('#overlay').toggleClass('open');
  // });

})();