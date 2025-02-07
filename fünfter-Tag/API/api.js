function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = "d4c93121da4ed8d91518c04395c1efeb";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=de`;

    fetch(apiUrl)
        .then(Response => Response.json())
        .then(data => {
            if (data.cod === 200) {
                const weatherInfo = `
                    <p>Stadt: ${data.name}</p>
                    <p>Wetter: ${data.weather[0].description}</p>
                    <p>Temperatur: ${data.main.temp}°C</p>
                    <p>Luftfeuchtigkeit: ${data.main.humidity}%</p>
                    <p>Windgeschwindigkeit: ${data.wind.speed} m/s</p>
                `;
                document.getElementById('weatherInfo').innerHTML = weatherInfo;
            } else {
                document.getElementById('weatherInfo').innerHTML = "<p>Stadt nicht gefunden!</p>";
            }
        })
        .catch(error => {
            console.error("Fehler: ", error);
            document.getElementById('weatherInfo').innerHTML = "<p>Es gab ein Problem bei der Suche nach dem Wetter.</p>"
        });
}

document.getElementById('getWeather').addEventListener("click", getWeather);
