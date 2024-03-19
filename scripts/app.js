const cityForm = document.querySelector('form');
const displayCityName = document.querySelector('.cityName');
const displayTemperature = document.querySelector('.temp-text')
const weatherCondition = document.querySelector('.conditionText')
const weatherInformation = document.querySelector('.weather-information')
const weatherCard = document.querySelector('.weather-card')
const timeOfTheDay = document.querySelector('.time')
const weatherIcon = document.querySelector('.icon img')
const locationWeather = new Weather()

//city here represents a parameter and when called cityValue represents the city user typed in
// const updateCityName = async (city) => {
//     const cityInformation = await getCity(city)
//     const cityWeather = await getWeather(cityInformation.Key)
//     return {cityInformation, cityWeather}
// }


 //DISPLAY WEATHER INFORMATION
const updateUI = (data) => {
    const cityInformation = data.cityInformation;
    const weather = data.cityWeather[0];
    weatherInformation.innerHTML =
    `
        <div class="cityName display-6"> ${cityInformation.EnglishName.toUpperCase()} </div>
        <div class="temperature display-3">
            <span class="temp-text">${ Math.round(weather.Temperature.Metric.Value)}</span>
            <span class="degCelsius">&deg;C</span>
        </div>
        <div class="weatherCondition">
            <h5 class="conditionText"> ${weather.WeatherText}</h5>
        </div>
    `
    //DISPLAY ICON MATCHING THE WEATHER
    const iconSrc = `/icons/${weather.WeatherIcon}.svg`;
    weatherIcon.setAttribute('src', iconSrc)

    //DISPLAY IMAGE FOR TIME OF THE DAY
    let timeSrc = weather.IsDayTime ? '/images/day.svg' : '/images/night.svg'
    timeOfTheDay.setAttribute('src', timeSrc)
    if(weatherCard.classList.contains('d-none')){
        weatherCard.classList.remove('d-none')
    }
}

//LISTEN TO SUBMIT EVENT ON THE FORM
cityForm.addEventListener('submit', e =>{
    e.preventDefault();
    const cityValue = cityForm.city.value.trim();
    localStorage.setItem('city', cityValue)
    cityForm.reset();
    locationWeather.updateCityName(cityValue)
        .then(data => {
            updateUI(data)
        })
        .catch(err => console.log(err))
})

let cityFromLs = localStorage.getItem('city');
if(cityFromLs){
    locationWeather.updateCityName(cityFromLs)
    .then(data => updateUI(data))
    .catch(err => console.log(err))
}