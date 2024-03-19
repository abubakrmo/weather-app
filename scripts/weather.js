class Weather {
    constructor(){
        this.key = 'tguDCD8SJmPfMjm7geAS0at0HGkR8dAd',
        this.cityUrl = 'http://dataservice.accuweather.com/locations/v1/cities/search',
        this.weatherUrl = 'http://dataservice.accuweather.com/currentconditions/v1/'
    }
    async getCity(city){
        const query = `?apikey=${this.key}&q=${city}`
    
        const response = await fetch(this.cityUrl + query);
        const data = await response.json();
    
        return data[0];
    }
    async getWeather(locationKey){
        const query = `${locationKey}?apikey=${this.key}`
    
        const response = await fetch(this.weatherUrl + query);
        const data = await response.json()
    
        return data;
    }
    async updateCityName(city){
        const cityInformation = await this.getCity(city)
        const cityWeather = await this.getWeather(cityInformation.Key)
        return {cityInformation, cityWeather}
    }
}

// const key = 'tguDCD8SJmPfMjm7geAS0at0HGkR8dAd';

// const getCity = async (city) =>{
//     const resourceUrl = 'http://dataservice.accuweather.com/locations/v1/cities/search';
//     const query = `?apikey=${key}&q=${city}`

//     const response = await fetch(resourceUrl + query);
//     const data = await response.json();

//     return data[0];

// }

// const getWeather = async (locationKey) =>{
//     const resourceUrl = 'http://dataservice.accuweather.com/currentconditions/v1/'
//     const query = `${locationKey}?apikey=${key}`

//     const response = await fetch(resourceUrl + query);
//     const data = await response.json()

//     return data;
// }

// getCity('lagos')`
//     .then(data => {
//         return getWeather(data.Key)
//     })
//     .then(data =>{
//         // console.log(data[0])
//     })
//     .catch(err => console.log(err.message))




