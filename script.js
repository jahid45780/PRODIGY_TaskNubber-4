const getWeatherButton = document.getElementById('getWeatherButton');
const locationInput = document.getElementById('locationInput');
const locationName = document.getElementById('locationName');
const temperature = document.getElementById('temperature');
const conditions = document.getElementById('conditions');
const weatherDisplay = document.getElementById('weatherDisplay');

// Replace 'YOUR_API_KEY' with your actual API key from a weather service like OpenWeatherMap
const apiKey = '6db05780bb2ce8b5e3e231e124740cf7';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const getWeather = async (location) => {
    try {
        const response = await fetch(`${apiUrl}?q=${location}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        if (data.cod === 200) {
            locationName.textContent = `${data.name}, ${data.sys.country}`;
            temperature.textContent = `Temperature: ${data.main.temp}°C`;
            conditions.textContent = `Conditions: ${data.weather[0].description}`;
            weatherDisplay.style.display = 'block';
        } else {
            alert('Location not found');
        }
    } catch (error) {
        alert('Failed to fetch weather data');
    }
};

getWeatherButton.addEventListener('click', () => {
    const location = locationInput.value;
    if (location) {
        getWeather(location);
    } else {
        alert('Please enter a location');
    }
});
