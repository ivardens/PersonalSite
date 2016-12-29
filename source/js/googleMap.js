export default () => (
  function initMap() {
    const mapOptions = {
      center: new google.maps.LatLng(49.230645, -123.010367),
      zoom: 11,
      zoomControl: false,
      disableDoubleClickZoom: false,
      mapTypeControl: false,
      scaleControl: false,
      scrollwheel: false,
      panControl: false,
      streetViewControl: false,
      draggable: false,
      overviewMapControl: false,
      overviewMapControlOptions: {
        opened: false
      },
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: [{
        'featureType': 'administrative',
        'elementType': 'labels.text.fill',
        'stylers': [{
          'color': '#455a64'
        }]
      }, {
        'featureType': 'landscape',
        'elementType': 'all',
        'stylers': [{
          'color': '#f1f1f1'
        }]
      }, {
        'featureType': 'poi',
        'elementType': 'all',
        'stylers': [{
          'visibility': 'off'
        }]
      }, {
        'featureType': 'road',
        'elementType': 'all',
        'stylers': [{
          'saturation': -100
        }, {
          'lightness': 45
        }]
      }, {
        'featureType': 'road.highway',
        'elementType': 'all',
        'stylers': [{
          'visibility': 'simplified'
        }]
      }, {
        'featureType': 'road.arterial',
        'elementType': 'labels.icon',
        'stylers': [{
          'visibility': 'off'
        }]
      }, {
        'featureType': 'transit',
        'elementType': 'all',
        'stylers': [{
          'visibility': 'off'
        }]
      }, {
        'featureType': 'water',
        'elementType': 'all',
        'stylers': [{
          'color': '#00bfa5'
        }, {
          'visibility': 'on'
        }]
      }]
    };
    const mapElement = document.getElementById('map');
    const map = new google.maps.Map(mapElement, mapOptions);
    const marker = new google.maps.Marker({
      position: {
        lat: 49.230645,
        lng: -123.010367
      },
      map: map
    });
  }
);