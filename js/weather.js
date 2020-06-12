var bogotaWeather = 'https://api.openweathermap.org/data/2.5/weather?q=bogota,co,3688689&appid=a964db424552a0ca3b97b4fef80f6e70&lang=es';
var lyonWeather = 'https://api.openweathermap.org/data/2.5/weather?q=lyon,fr,2996944&appid=a964db424552a0ca3b97b4fef80f6e70&lang=es';
var parisWeather = 'https://api.openweathermap.org/data/2.5/weather?q=paris,fr,2988507&appid=a964db424552a0ca3b97b4fef80f6e70&lang=es';

$.getJSON(bogotaWeather, function (data) {
    $("#actualBogota").html(Math.round(parseFloat(data.main.temp - 273.15)) + 'º<sup>C</sup>');
});

$.getJSON(lyonWeather, function (data) {
    $("#lyonWeather").html(Math.round(parseFloat(data.main.temp - 273.15)) + 'º<sup>C</sup>');
    $("#humidityLyon").html('Humidity ' + data.main.humidity + '%');
    $("#windLyon").html(Math.round(data.wind.speed * 3.6) + 'km/h');
});

$.getJSON(parisWeather, function (data) {
    $("#parisWeather").html(Math.round(parseFloat(data.main.temp - 273.15)) + 'º<sup>C</sup>');
    $("#humidityParis").html('Humidity ' + data.main.humidity + '%');
    $("#windParis").html(Math.round(data.wind.speed * 3.6) + 'km/h');
});