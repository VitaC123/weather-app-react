import axios from 'axios';
import timestamp from 'unix-timestamp';

module.exports = {
    setCity: function (city) {
        this.city = city;
        this.getWeather();
    },
    getWeather: function () {
        var current = Promise.resolve(this.queryOpenWeatherApi('weather?q=' + this.city));
        var fiveDay = Promise.resolve(this.queryOpenWeatherApi('forecast/daily?q=' + this.city));
        Promise.all([current, fiveDay]).then(function (weatherData) {
            this.current = weatherData[0];
            this.current.dt = timestamp.toDate(this.current.dt);
            this.fiveDay = weatherData[1];
            this.fiveDay.list = this.reformatDates(this.fiveDay.list);
            console.log("Current", this.current, "fiveDay", this.fiveDay);
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
    },
    reformatDates: function (arrayOfForecasts) {
        return arrayOfForecasts.map(function (forecast) {
            forecast.dt = timestamp.toDate(forecast.dt);
            return forecast;
        });
    }
};
