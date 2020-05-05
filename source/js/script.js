
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

var mapAddress = document.querySelector(".map__google-map");
var mapPicture = document.querySelector(".map__picture");
var mapWrapper = document.querySelector(".map");
var width = document.documentElement.clientWidth;

var form = document.querySelector(".form");
var personName = document.querySelector(".form__input-text--name");
var personSurname = document.querySelector(".form__input-text--surname");
var personTel = document.querySelector(".form__input-text--tel");
var personEmail = document.querySelector(".form__input-text--email");
var popupBlankFields = document.querySelector(".blank-fields");
var popupSent = document.querySelector(".feedback-sent");
var popupBlankFieldsClose = document.querySelector(".blank-fields__close-button");
var popupSentClose = document.querySelector(".feedback-sent__close-button");

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

if (mapAddress) {
  function initMap() {
    var uluru = {lat: 34.860084, lng: -111.789785};
    var map = new google.maps.Map(mapAddress, {zoom: 8, center: uluru});
    var marker = new google.maps.Marker({position: uluru, map: map});
    mapAddress.style.zIndex = 1;
    mapPicture.style.display = "none";
    mapWrapper.style.overflow = "visible";
  };

  var script = document.createElement("script");
  script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyD3BpFqzWP_ymtXwTlGLCK0ujLH9BBKCJo&callback=initMap";
  script.async = true;
  script.defer = true;
  document.body.appendChild(script);

  if (width > 320) {
    mapAddress.style.width = width + "px";
    mapAddress.style.marginLeft = -(width/2) + "px";
  }

  window.addEventListener("resize", function (evt) {
    var width = document.documentElement.clientWidth;
    if (width > 320) {
      mapAddress.style.width = width + "px";
      mapAddress.style.marginLeft = -(width/2) + "px";
    } else {
      mapAddress.style.width = "320px";
      mapAddress.style.marginLeft = "-160px";
    }
  });
}

if (form) {
  form.addEventListener("submit", function (evt) {
    if (!personName.value || !personSurname.value || !personTel.value || !personEmail.value) {
      evt.preventDefault();
      if (!personName.value) {
        personName.style.borderColor = "red";
      }
      if (!personSurname.value) {
        personSurname.style.borderColor = "red";
      }
      if (!personTel.value) {
        personTel.style.borderColor = "red";
      }
      if (!personEmail.value) {
        personEmail.style.borderColor = "red";
      }
      popupBlankFields.style.display = "block";
    } else {
      popupSent.style.display = "block";
    }
  });

  popupBlankFieldsClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupBlankFields.style.display = "none";
  });

  popupSentClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupSent.style.display = "none";
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popupBlankFields.style.display === "block") {
        popupBlankFields.style.display = "none";
      }
      if (popupSent.style.display === "block") {
        popupSent.style.display = "none";
      }
    }
  });
}
