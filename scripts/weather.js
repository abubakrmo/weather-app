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



