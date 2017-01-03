function flip (ev) {
  // Rotation flip handler
  var flip = document.querySelector('.flip');
  if (flip) {
    var className = ev.target.className;
    var fClassName = flip.className;
    var fClassList = flip.classList;
    var tagName = ev.target.tagName;

    if (className === 'login-btn' && fClassName != 'flip onFlip') {
      fClassList.add('onFlip');
    } else {
      tagName === 'BODY' ||
        className === 'login-btn' ||
        className === 'login-block' ||
        className === 'container' ||
        className === 'login-content' ||
        className === 'login-content' ?
        fClassList.remove('onFlip') : null;
    }
  }
};

export default flip;