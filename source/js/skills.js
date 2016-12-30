export default (function () {

  function init() {
    _setUpListners();
  };

  function _setUpListners() {
    window.addEventListener('scroll', _scroll);
  };

  function _scroll(e) {

    var
    // marginTop = margin before block when animation is started
      marginTop = 200,
      blockOffset = document.querySelector('.skills').getBoundingClientRect()['top'];

    if (blockOffset < marginTop) {
      _SkillsShow();
    }
  };

  function _perimetr(radius) {
    return 2 * 3.14159265 * radius;
  }

  function _SkillsShow() {

    var items = document.querySelectorAll('.skills__circle-second');

    Array.prototype.forEach.call(items, function (element, index) {
      var
        levelValue = element.dataset['circle'],
        pause = element.dataset['pause'],
        radiusCircle = element.getAttribute('r'),
        strokeDasharray = _perimetr(radiusCircle),
        strokeDashoffset = strokeDasharray / 100 * levelValue;

      setTimeout(function () {
        element.style.strokeDasharray = strokeDasharray;
        element.style.strokeDashoffset = strokeDashoffset;
      }, pause);

    });
  };

  return {
    init: init
  };

})();