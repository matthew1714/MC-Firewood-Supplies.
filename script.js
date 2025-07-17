function initMap() {
    const location = { lat: 52.7063, lng: -2.7411 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 9,
        center: location,
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });
}
