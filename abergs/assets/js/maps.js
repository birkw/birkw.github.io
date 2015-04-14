google.maps.event.addDomListener(window, 'load', init);

var adamberg = new google.maps.LatLng(59.733907,18.356909);

function init() {
  
    var mapOptions = {
        zoom: 15,
        center: adamberg,
        draggable: true,
        scrollwheel: false,
        disableDefaultUI: true,
        styles: [{"featureType":"water","stylers":[{"color":"#46bcec"},{"visibility":"on"}]},{"featureType":"landscape","stylers":[{"color":"#f7f7f7"}]},{"featureType":"road","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"transit","stylers":[{"visibility":"off"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]}]
      };
      
    var mapElement = document.getElementById('map');

    var map = new google.maps.Map(mapElement, mapOptions);

    var contentString = '<div style="padding: 10px; width: 320;" id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h1 id="firstHeading" style="font-family: helvetica neue, arial, sans-serif;' +
          ' margin-bottom: 10px; font-size: 20px;" ' +
          'class="firstHeading">Adamberg Snappsar</h1>'+
          '<div id="bodyContent"><div class="content-left" style="float: left; width: 320px;">'+
          '<p style="font-size: 12px; font-family: helvetica neue, arial, sans-serif; font-weight: normal; letter-spacing: auto;"> ' +
          'På Kammakargatan 48, 111 60 STOCKHOLM är vi belägrade</a>.</p> '+
          '</div>'+
          '</div>';
    
    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    var marker = new google.maps.Marker({
        map: map,
        draggable: false,
        title: 'Uluru (Ayers Rock)',
        animation: google.maps.Animation.DROP,
        position: adamberg
    });
    
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
      });
    
    google.maps.event.addListener(marker, 'click', toggleBounce);
}

function toggleBounce() {

  if (marker.getAnimation() != null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}