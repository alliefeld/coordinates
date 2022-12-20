
// function getLocation() {
//     return Geolocation.getCurrentPosition();
// }
// console.log(getLocation());
// let location = navigator.geolocation.getCurrentPosition();

const message = document.getElementById('message');
const button = document.getElementById('getNewLocation');
button.addEventListener("mousedown", navigator.geolocation.getCurrentPosition(onSuccess, onError));



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
    
}