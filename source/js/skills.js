export default (function () {

  function init() {
    _setUpListners();
  };

  function _setUpListners() {
    $(window).on('scroll', _scroll);
  };

  function _scroll(e) {

    var
      // marginTop = margin before block when will start animation
      marginTop = 150,
      windowMargin = $(window).scrollTop(),
      containerTop = $('.skills').offset().top - marginTop;

    if (windowMargin > containerTop) {
      _SkillsShow();
    }
  };

  function _SkillsShow() {

    var
      time = 0,
      delay = 200;

    $('.skills__circle-second').each(function (index, element) {
      var _this = this,
        levelValue = $(element).data('circle'),
        levelClass = "skills__circle-" + levelValue;

      setTimeout(function () {
        _this.classList.add(levelClass);

      }, time += delay);

    });
  };

  return {
    init: init
  };

})();