// navigator.geolocation.getCurrentPosition((p)=>{
//     let x=p.coords.latitude
//     let y=p.coords.longitude
//     document.write("latitude : ",x,"<br>longitude : ",y)
// })

navigator.geolocation.getCurrentPosition(showPosition,showError)

function showPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    document.write("Latitude: " + lat + "<br>Longitude: " + lon);
}

function showError() {
    document.write("error:" )
}