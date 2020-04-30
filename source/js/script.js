
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

var mapAddress = document.querySelector(".map__google-map");
var mapWrapper = document.querySelector(".map__picture");
var width = document.documentElement.clientWidth;

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

function initMap() {
  var uluru = {lat: 34.860084, lng: -111.789785};
  var map = new google.maps.Map(mapAddress, {zoom: 8, center: uluru});
  var marker = new google.maps.Marker({position: uluru, map: map});
  mapAddress.style.zIndex = 1;
  mapWrapper.style.display = "none";
};

var script = document.createElement("script");
script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyD3BpFqzWP_ymtXwTlGLCK0ujLH9BBKCJo&callback=initMap";
script.async = true;
script.defer = true;
document.body.appendChild(script);

if (width > 320) {
  mapAddress.style.width = width + "px";
}

window.addEventListener("resize", function (evt) {
  var width = document.documentElement.clientWidth;
  if (width > 320) {
    mapAddress.style.width = width + "px";
  } else {
    mapAddress.style.width = "320px";
  }
});
