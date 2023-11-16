let apiKey = "665eee8209c00886689aba90d44b34f5";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let search = document.querySelector('.search input');
let sButton = document.querySelector('.sbutton');
let wImage = document.querySelector('.wimage');


async function weatherData(city){

    let response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();

    console.log(data);

    document.querySelector('.temp').innerText = Math.round(data.main.temp) + " °C";
    document.querySelector('.city').innerText = data.name;
    document.querySelector('.humid').innerText = data.main.humidity + "%";
    document.querySelector('.speed').innerText = data.wind.speed + " Km/h";

    if(data.weather[0].main == "Clouds"){
        wImage.src = "./images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        wImage.src = "./images/clear.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        wImage.src = "./images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        wImage.src = "./images/mist.png";
    }
    else if(data.weather[0].main == "Rain"){
        wImage.src = "./images/rain.png";
    }
    else if(data.weather[0].main == "Snow"){
        wImage.src = "./images/snow.png";
    }

    document.querySelector('.middle').style.display = "grid";
    document.querySelector('.bottom').style.display = "grid";


}

sButton.addEventListener("click", ()=>{
    weatherData(search.value);
});

