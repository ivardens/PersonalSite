var hamburger = function (ev) {
  // Hamburget menu handler 
  if (
    ev.target.classList.contains('button_container') || 
    ev.target.parentNode.id == 'toggle'|| 
    ev.target.children.length === 3 || 
    ev.target.classList.contains('top') || 
    ev.target.classList.contains('middle') || 
    ev.target.classList.contains('bottom') || 
    ev.target.classList.contains('overlay')
    ) {

    let toggle = document.getElementById('toggle');
    let overlay = document.getElementById('overlay');

    if (ev.target.id === toggle.id && toggle.classList.contains('active') 
        || ev.target.parentNode.id === toggle.id && toggle.classList.contains('active')) {

      toggle.classList.remove('active');
      overlay.classList.remove('open');
    } else {
      toggle.classList.add('active');
      overlay.classList.add('open');
    }
  }
};

export default hamburger;