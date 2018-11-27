$(document).ready(function(){
    $('#select').on('change', function(){
        $.ajax({
            url: 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/9c6e014c6c0a820ef9ccbcf95a906ba5/-33.024503,-71.5518119/',
            method: 'GET',
        }).then(function (data) {
            console.log(data);
        });
    })
});

//MAPA
function generarMap() {
    var mymap = L.map('map').setView([51.505, -0.09], 13);
}