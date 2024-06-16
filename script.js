document.getElementById('search-btn').addEventListener('click', function() {
    const city = document.getElementById('city-input').value;
    const apiKey = '1379f41b1aa7a0cf6db28de6974844b5'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log('API Response:', data);
            if (data.cod === 200) {
                const windSpeed = data.wind.speed;
                const temp = Math.round(data.main.temp); 
                const humidity = data.main.humidity;
                const weatherSummary = data.weather[0].description;         
                const location = `${data.name}, ${data.sys.country}`;
                const airPressure = data.main.pressure;
                const feelsLike = data.main.feels_like;


                document.getElementById('temp').innerText = `${temp}°C`;
                document.getElementById('weatherSummary').innerText = `${capitalizeFirstLetter(weatherSummary)}`;
                document.getElementById('humidity').innerText = `${humidity}%`;
                document.getElementById('windSpeed').innerText = `${windSpeed} km/h`;
                document.getElementById('location').innerText = `${location}`;
                document.getElementById('airPressure').innerText = `${airPressure}`;
                document.getElementById('feelsLike').innerText = `${feelsLike}`;
            } else {
                alert('City not found');
            }
        })
        .catch(error => console.error('Error fetching data:', error));
});


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
