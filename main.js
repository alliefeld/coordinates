
// function getLocation() {
//     return Geolocation.getCurrentPosition();
// }
// console.log(getLocation());
// let location = navigator.geolocation.getCurrentPosition();

// const message = document.getElementById('message');
// document.getElementById("getNewLocation").addEventListener("click", navigator.geolocation.getCurrentPosition(getNewCoords));



function onSuccess(position) {
    const {
        latitude,
        longitude
    } = position.coords;
    console.log(longitude);

    // message.classList.add('success');
    // message.innerText = `Your location: (${latitude},${longitude})`;
    message.innerHTML = `hi`;
}

function onError() {
    // message.classList.add('error');
    message.innerHTML = `Failed to get your location!`;
}

// 69 miles in 1 degree of lat

function getNewCoords(position) {
    const {
        latitude,
        longitude
    } = position.coords;
    console.log(longitude);
    const currentLocation = document.getElementById("currentLocation");
    currentLocation.innerHTML = `Current Location: (${latitude.toFixed(5)}, ${longitude.toFixed(5)})`;
    const NSDistance = ((Math.floor(Math.random() * 4000) / 1000) - 2).toFixed(3);
    const NSDistance_p = document.getElementById("NSDistance")
    if (NSDistance >= 0) {
        NSDistance_p.innerHTML = `${NSDistance} mile(s) North`;
    }
    else {
        NSDistance_p.innerHTML = `${NSDistance * -1} mile(s) South`;
    }
    const EWDistance = ((Math.floor(Math.random() * 1000) / 1000) - 0.5).toFixed(3);
    const EWDistance_p = document.getElementById("EWDistance")
    if (EWDistance >= 0) {
        EWDistance_p.innerHTML = `${EWDistance} mile(s) East`;
    }
    else {
        EWDistance_p.innerHTML = `${EWDistance * -1} mile(s) West`;
    }
    const dlat = NSDistance * (1/69);
    const dlong = EWDistance * (1/54.6);

    const newLat = latitude + dlat;
    const newLong = longitude + dlong;
    console.o

    const newLocation = document.getElementById("newLocation");
    newLocation.innerHTML = `New Location: (${newLat.toFixed(5)}, ${newLong.toFixed(5)})`;

    const URL = `https://maps.google.com/?q=${newLat},${newLong}`;

    const mapURL = document.getElementById("mapURL");
    mapURL.innerText = URL;
    mapURL.setAttribute("href", URL);
  

    // 2 miles x 1 degree
    //    1        69 miles
}