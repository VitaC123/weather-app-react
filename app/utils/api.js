import axios from 'axios';

module.exports = {
    setCity: function(city) {
        this.city = city;
        this.getWeather();
    },
    getWeather: function () {
        var current = Promise.resolve(this.queryOpenWeatherApi('weather?q=' + this.city));
        var fiveDay = Promise.resolve(this.queryOpenWeatherApi('forecast/daily?q=' + this.city));
        Promise.all([current, fiveDay]).then(function (weatherData) {
            this.current = weatherData[0];
            this.allTime = weatherData[1];
            console.log(this.current, this.allTime);
        }.bind(this)).catch(this.handleError);
    },
    queryOpenWeatherApi: function (searchString) {
        searchString = (
            'http://api.openweathermap.org/data/2.5/' + searchString +
            '&type=accurate&APPID=83e8eac0d0a3d8db7f186d96b50f1e69'
        );
        return axios.get(searchString).then(function (results) {
            return results.data;
        });
    },
    handleError: function (error) {
        console.warn(error);
        return null;
    }
};
