google.maps.event.addDomListener(window, 'load', init);

var adamberg = new google.maps.LatLng(59.3163624,18.0624142);

function init() {
  
    var mapOptions = {
        zoom: 15,
        center: adamberg,
        draggable: true,
        scrollwheel: false,
        disableDefaultUI: true,
        styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
      };
      
    var mapElement = document.getElementById('map');

    var map = new google.maps.Map(mapElement, mapOptions);

    var contentString = '<div style="padding: 10px; width: 320;" id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h1 id="firstHeading" style="font-family: helvetica neue, arial, sans-serif;' +
          ' margin-bottom: 10px; font-size: 20px;" ' +
          'class="firstHeading">Cykelåtervinning AB</h1>'+
          '<div id="bodyContent"><div class="content-left" style="float: left; width: 320px;">'+
          '<p style="font-size: 12px; font-family: helvetica neue, arial, sans-serif; font-weight: normal; letter-spacing: auto;"> ' +
          'Maria Prästgårdsgata 14 </br> 118 52 STOCKHOLM</a>.</p> '+
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