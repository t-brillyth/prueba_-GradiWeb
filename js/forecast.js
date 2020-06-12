var dynamicUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=bogota,co,3688689&appid=a964db424552a0ca3b97b4fef80f6e70&lang=es';
$.getJSON(dynamicUrl, function (data) {
    if (data.list[11].weather[0].main == "Clouds") {
        console.log("Nubes")
        $(".w3-left.time_first.sabado").append("<i class='fas fa-cloud cloudy'></i>");
    }

    if (data.list[19].weather[0].main == "Clouds") {
        $(".w3-left.time_first.domingo").append("<i class='fas fa-cloud cloudy'></i>");
    }

    if (data.list[27].weather[0].main == "Clouds") {
        $(".w3-left.time_first.lunes").append("<i class='fas fa-cloud cloudy'></i>");
    }

    if (data.list[11].weather[0].main == "Rain") {
        $(".w3-left.time_first.sabado").append("<i class='fas fa-cloud-showers-heavy rain'></i>");
    }

    if (data.list[19].weather[0].main == "Rain") {
        $(".w3-left.time_first.domingo").append("<i class='fas fa-cloud-showers-heavy rain'></i>");
    }

    if (data.list[27].weather[0].main == "Rain") {
        $(".w3-left.time_first.lunes").append("<i class='fas fa-cloud-showers-heavy rain'></i>");
    }

    if (data.list[11].weather[0].main == "Clear") {
        $(".w3-left.time_first.sabado").append("<i class='sun'>☀</i>");
    }

    if (data.list[19].weather[0].main == "Clear") {
        $(".w3-left.time_first.domingo").append("<i class='sun'>☀</i>");
    }

    if (data.list[27].weather[0].main == "Clear") {
        $(".w3-left.time_first.lunes").append("<i class='sun'>☀</i>");
    }

    $("#sabado").html(Math.round(parseFloat(data.list[11].main.temp_min - 273.15)) + "º" + " / " + Math.round(parseFloat(data.list[3].main.temp_max - 273.15)) + "º");
    $("#domingo").html(Math.round(parseFloat(data.list[19].main.temp_min - 273.15)) + "º" + " / " + Math.round(parseFloat(data.list[11].main.temp_max - 273.15)) + "º");
    $("#lunes").html(Math.round(parseFloat(data.list[27].main.temp_min - 273.15)) + "º" + " / " + Math.round(parseFloat(data.list[19].main.temp_max - 273.15)) + "º");

    $("#sabadoMain").html(data.list[11].weather[0].main);
    $("#domingoMain").html(data.list[19].weather[0].main);
    $("#lunesMain").html(data.list[27].weather[0].main);
});