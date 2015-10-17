var map;
var app;
var isFullscreen = false;
var tylerLatLong = {lat: 32.350802, lng: -95.300604}

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: tylerLatLong,
        zoom: 12,
        zoomControl: true,
        streetViewControl: false,
        scrollwheel: true,
        mapTypeControl: false,
        rotateControl: false,
        styles: [{"stylers":[{"hue":"#ff1a00"},{"invert_lightness":true},{"saturation":-100},{"lightness":33},{"gamma":0.5}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#2D333C"}]}]
    });

    app = document.getElementById("app");
}

function reset() {
    map.setCenter(tylerLatLong);
}

function fullscreen() {
    if(isFullscreen == false) {
        if(app.requestFullscreen) {
            app.requestFullscreen();
        } else if(app.mozRequestFullScreen) {
            app.mozRequestFullScreen();
        } else if(app.webkitRequestFullscreen) {
            app.webkitRequestFullscreen();
        } else if(app.msRequestFullscreen) {
            app.msRequestFullscreen();
        } else {
            return;
        }

        isFullscreen = true;

    } else if(isFullscreen == true) {
        if(document.exitFullscreen) {
            document.exitFullscreen();
        } else if(document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if(document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else {
            return;
        }

        isFullscreen = false;
    }
}